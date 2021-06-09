import {JetView, plugins} from "webix-jet";


export default class TopView extends JetView{
	config(){

		var menu = {
			view:"menu", id:"top:menu", 
			css:"app_menu",
			width:220, 
			layout:"y", 
			select:true,
			template:"<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value:"Подключение", id:"start", icon:"wxi-columns" },
				{ value:"Вопрос 1",		 id:"question/1",  icon:"wxi-pencil" },
				{ value:"Вопрос 2",		 id:"question/2",  icon:"wxi-pencil" },
				{ value:"Вопрос 3",		 id:"question/3",  icon:"wxi-pencil" },
				{ value:"Вопрос 4",		 id:"question/4",  icon:"wxi-pencil" },
				{ value:"Вопрос 5",		 id:"question/5",  icon:"wxi-pencil" },
				{ value:"Заключение",    id:"score",      icon:"wxi-columns" }
			]
		};

		return {
			type:"clean",
			paddingX: 5, 
			css:"app_layout", 
			cols:[
				{  
					paddingX: 5, 
					paddingY: 10, 
					rows: [ 
						{
							css: "webix_shadow_medium", 
							rows: [
								{ type:"header", template:"Quiz", css:"webix_header app_header" }, 
								menu
							]
						}
					]
				},
				{ 
					type: "wide", 
					paddingY: 10, 
					paddingX: 5, 
					rows:[
						{ $subview:true },
					]
				}
			]
		};

	}

	init() {
		this.use(plugins.Menu, "top:menu");
	}
}