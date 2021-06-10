import { JetView, plugins } from 'webix-jet';

export default class TopView extends JetView {
    config() {
        return {
            rows: [
                {
                    view: 'form',
                    id: 'log_form',
                    elements: [
                        { view: 'text', label: 'Имя', name: 'name' },
                        { view: 'text', label: 'Фамилия', name: 'lastname' },
                        {
                            view: 'button',
                            value: 'Start',
                            paddingY: 25,
                            css: 'webix_primary',
                            click: () => {
                                this.app.show('/layout/question/1');
                            },
                        },
                    ],
                },
            ],
        };
    }
}
