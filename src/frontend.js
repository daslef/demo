import './styles/app.css';
import session from './models/session';
import { JetApp, EmptyRouter, HashRouter, plugins } from 'webix-jet';

export default class MyApp extends JetApp {
    constructor(config) {
        const defaults = {
            id: APPNAME,
            version: VERSION,
            router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
            debug: !PRODUCTION,
            start: '/layout/start',
        };

        super({ ...defaults, ...config });
        this.use(plugins.User, { model: session });
        this.use(plugins.Locale, { lang: 'ru', storage: webix.storage.local });
    }
}

if (!BUILD_AS_MODULE) {
    webix.ready(() => {
        webix.attachEvent(
            'onBeforeAjax',
            function (mode, url, data, request, headers) {
                headers['Authorization'] = `Bearer ${localStorage.getItem(
                    'token'
                )}`;
            }
        );
        return new MyApp().render();
    });
}
