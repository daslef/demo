import {JetView} from "webix-jet";
import { data } from "models/questions";

export default class DataView extends JetView{
	config(){
		return { 
			rows: [
				{ view:"label", label: data[+this.getUrl()[1].page-1].title, align:"center"},
				{ view:"radio", options:["Вариант1", "Вариант2", "Вариант3", "Вариант4"]},
				{ view:"button", value:"Next", click: () => {
					this.app.show(`/layout/question/${+this.getUrl()[1].page+1}`);
				}}
			]
		};
	}
}