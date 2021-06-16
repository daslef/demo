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
    }
}

if (!BUILD_AS_MODULE) {
    const app = new MyApp();
    app.use(plugins.User, { model: session });
    app.use(plugins.Locale, { lang: 'ru' });
    webix.ready(() => app.render());
}
