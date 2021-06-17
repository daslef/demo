import { JetView } from 'webix-jet';

export default class StartView extends JetView {
    generatePayload() {
        const user = this.app.getService('user').getUser();
        return {
            username: 'test',
            nickname: 'test',
            template: 'default',
            subject: this.$$('examName').getValue(),
            link: 'https://damp-anchorage-65606.herokuapp.com/api/report/',
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
                                        window.supervisor = new Supervisor({
                                            url: 'https://dev04.proctoring.online',
                                        });

                                        window.supervisor
                                            .init({
                                                provider: 'jwt',
                                                token: token,
                                            })
                                            .then(() => {
                                                return supervisor.start();
                                            })
                                            .catch((err) => {
                                                alert(err.toString());
                                                location.href = '/';
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
