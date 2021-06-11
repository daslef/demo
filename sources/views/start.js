import { JetView } from 'webix-jet';

export default class StartView extends JetView {
    validateUser() {
        return (
            this.$$('firstname').getValue() && this.$$('lastname').getValue()
        );
    }

    populatePayload() {
        const name = this.$$('firstname').getValue();
        const lastName = this.$$('lastname').getValue();
        return {
            username: 'student1',
            nickname: `${name} ${lastName}`,
            template: 'default',
            subject: 'Test 1',
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
                            view: 'text',
                            localId: 'firstname',
                            label: 'Имя',
                            name: 'firstname',
                        },
                        {
                            view: 'text',
                            localId: 'lastname',
                            label: 'Фамилия',
                            name: 'lastname',
                        },
                        {
                            view: 'label',
                            localId: 'error',
                            label: 'Введите имя и фамилию',
                            name: 'error',
                            hidden: true,
                        },
                        {
                            view: 'button',
                            value: 'Start',
                            paddingY: 25,
                            id: 'start',
                            css: 'webix_primary',
                            click: () => {
                                if (!this.validateUser()) {
                                    this.$$('error').show();
                                    setTimeout(
                                        () => this.$$('error').hide(),
                                        1000
                                    );
                                } else {
                                    this.$$('error').hide();
                                    const payload = this.populatePayload();

                                    webix
                                        .ajax()
                                        .post('/api/token', payload)
                                        .then((data) => data.json())
                                        .then(({ id, token }) => {
                                            const supervisor = new Supervisor({
                                                url: 'https://dev04.proctoring.online',
                                            });

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
                                                    location.href = '/';
                                                })
                                                .then(() => {
                                                    webix.storage.local.put(
                                                        'session_id',
                                                        id
                                                    );
                                                    this.app.show(
                                                        '/layout/question/1'
                                                    );
                                                });
                                        });
                                }
                            },
                        },
                    ],
                },
            ],
        };
    }
}
