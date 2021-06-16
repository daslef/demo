import { JetView } from 'webix-jet';

export default class StartView extends JetView {
    generatePayload() {
        const user = this.app.getService('user').getUser();
        // console.log(user.email)
        return {
            username: 'test',
            nickname: 'test',
            template: 'default',
            subject: this.$$('examName').getValue(),
        };
    }

    config() {
        return {
            rows: [
                {
                    view: 'form',
                    id: 'log_form',
                    elements: [
                        {
                            view: 'radio',
                            name: 'examName',
                            localId: 'examName',
                            label: 'Экзамен',
                            options: ['География', 'Геометрия', 'Ботаника'],
                        },
                        {
                            align: 'center',
                            view: 'button',
                            value: 'Start',
                            paddingY: 25,
                            id: 'start',
                            css: 'webix_primary',

                            click: () => {
                                const payload = this.generatePayload();
                                webix
                                    .ajax()
                                    .post('/api/token', payload)
                                    .then((data) => {
                                        return data.json();
                                    })
                                    .then(({ token }) => {
                                        const supervisor = new Supervisor({
                                            url: 'https://dev04.proctoring.online',
                                        });

                                        console.log('sprv');
                                        console.log(token);

                                        supervisor
                                            .init({
                                                provider: 'jwt',
                                                token: token,
                                            })
                                            .then(() => {
                                                return supervisor.start();
                                            })
                                            .catch((err) => {
                                                alert(err.toString());
                                                // location.href = '/';
                                            })
                                            .then(() => {
                                                this.app.show(
                                                    '/layout/question/1'
                                                );
                                            });
                                    });
                            },
                        },
                    ],
                },
            ],
        };
    }
}
