import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
    config(){
        return {
            rows:[
				{ template:"Подключение", css:"webix_shadow_medium app_start", height: 40},
				{
					view:"form", 
					id:"log_form",
					margin: 5,
					paddingY:25,
					paddingX:25,
					elements:[
						{ view:"text", label:"Имя", name:"name"},
						{ view:"text", label:"Фамилия", name:"lastname"},
						{ view:"button", value:"Start", paddingY:25, css:"webix_primary", click: () => {
								this.app.show("/layout/question/1");
						}}
					]
				},
            ]
        };
    }
}