import { JetView } from 'webix-jet';

export default class LoginView extends JetView {
    config() {
        const login_form = {
            view: 'form',
            localId: 'login:form',
            width: 400,
            borderless: false,
            margin: 10,
            rows: [
                { type: 'header', template: this.app.config.name },
                {
                    view: 'text',
                    name: 'email',
                    label: 'Email',
                    labelPosition: 'top',
                },
                {
                    view: 'text',
                    type: 'password',
                    name: 'password',
                    label: 'Password',
                    labelPosition: 'top',
                },
                {
                    view: 'button',
                    value: 'Login',
                    click: () => this.do_login(),
                    hotkey: 'enter',
                },
            ],
            rules: {
                email: webix.rules.isNotEmpty,
                password: webix.rules.isNotEmpty,
            },
        };

        return {
            cols: [{}, { rows: [{}, login_form, {}] }, {}],
        };
    }

    init(view) {
        view.$view.querySelector('input').focus();
    }

    do_login() {
        const user = this.app.getService('user');
        const form = this.$$('login:form');

        if (form.validate()) {
            const data = form.getValues();
            user.login(data.email, data.password).catch(function () {
                webix.html.removeCss(form.$view, 'invalid_login');
                form.elements.password.focus();
                webix.delay(function () {
                    webix.html.addCss(form.$view, 'invalid_login');
                });
            });
        }
    }
}
