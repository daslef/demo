import { JetView, plugins } from 'webix-jet';

export default class TopView extends JetView {
    config() {
        const _ = this.app.getService('locale')._;
        const lang = this.app.getService('locale').getLang();

        var menu = {
            view: 'menu',
            id: 'top:menu',
            localId: 'menu',
            css: 'app_menu',
            width: 220,
            layout: 'y',
            select: true,
            template: "<span class='webix_icon #icon#'></span> #value# ",
            data: [
                { value: 'Preparation', id: 'start', icon: 'wxi-columns' },
                { value: 'Question 1', id: 'question/1', icon: 'wxi-pencil' },
                { value: 'Question 2', id: 'question/2', icon: 'wxi-pencil' },
                { value: 'Question 3', id: 'question/3', icon: 'wxi-pencil' },
                { value: 'Question 4', id: 'question/4', icon: 'wxi-pencil' },
                { value: 'Question 5', id: 'question/5', icon: 'wxi-pencil' },
                { value: 'Score', id: 'score', icon: 'wxi-columns' },
            ],
            template: (obj) => _(obj.value),
        };

        return {
            type: 'clean',
            paddingX: 5,
            css: 'app_layout',
            cols: [
                {
                    rows: [
                        {
                            css: 'webix_shadow_medium',
                            rows: [
                                {
                                    name: 'lang',
                                    view: 'segmented',
                                    label: '',
                                    options: [
                                        { id: 'en', value: 'English' },
                                        { id: 'ru', value: 'Russian' },
                                        { id: 'es', value: 'Spanish' },
                                    ],
                                    click: () => {
                                        const langs =
                                            this.app.getService('locale');
                                        const value = this.getRoot()
                                            .queryView({ name: 'lang' })
                                            .getValue();
                                        langs.setLang(value);
                                    },
                                    value: lang,
                                },
                                {
                                    type: 'header',
                                    template: 'Quiz',
                                    css: 'webix_header app_header',
                                },
                                menu,
                            ],
                        },
                    ],
                },
                {
                    type: 'wide',
                    paddingY: 10,
                    paddingX: 5,
                    rows: [{ $subview: true }],
                },
            ],
        };
    }

    init() {
        this.use(plugins.Menu, 'top:menu');
    }
}
