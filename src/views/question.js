import { JetView } from 'webix-jet';
import { data } from 'models/questions';

export default class DataView extends JetView {
    config() {
        return {
            rows: [
                {
                    view: 'label',
                    label: data[+this.getUrl()[1].page - 1].title,
                    align: 'center',
                },
                { view: 'radio', localId: 'options', options: ['1', '2'] },
                {
                    view: 'label',
                    localId: 'error',
                    label: 'Необходимо выбрать вариант ответа',
                    hidden: true,
                },
                {
                    view: 'button',
                    value: 'Next',
                    click: () => {
                        if (!this.$$('options').getValue()) {
                            this.$$('error').show();
                            setTimeout(() => {
                                this.$$('error').hide();
                            }, 2000);
                            return;
                        } else if (this._url[1].page === '5') {
                            console.log(supervisor);
                            this._nextUrl = '/layout/score';
                        } else {
                            this.$$('error').hide();
                            this.$$('options').setValue();
                            this._nextUrl = `/layout/question/${
                                +this.getUrl()[1].page + 1
                            }`;
                        }

                        const answers =
                            view.parse(webix.storage.local.get('answers')) ||
                            {};
                        answers[this._url[1].page] =
                            this.$$('options').getValue();
                        webix.storage.local.put(
                            'answers',
                            JSON.stringify(answers)
                        );

                        this.app.show(this._nextUrl);
                    },
                },
            ],
        };
    }

    initQuestion(view, index) {
        view.queryView({
            view: 'label',
        }).setValue(data[index].title);

        this.$$('options').data.options = data[index].options;
        this.$$('options').refresh();
    }

    init(view, url) {
        if (url.length > 1) {
            this.initQuestion(view, +url[1].page - 1);
        }
        this._url = url;
    }

    urlChange(view, url) {
        if (url.length > 1) {
            this.initQuestion(view, +url[1].page - 1);
        }
        this._url = url;
    }
}
