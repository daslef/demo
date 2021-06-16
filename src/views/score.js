import { JetView } from 'webix-jet';

export default class ScoreView extends JetView {
    config() {
        return { cols: [{ template: 'Completed' }] };
    }
}
