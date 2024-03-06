import {Editor, Plugin, Menu, App} from 'obsidian';

import HighlightGPT from "./main";


export default function contextMenu(
	app: App,
	menu: Menu,
	editor: Editor,
    plugin: HighlightGPT,
  ): void {
	const selection = editor.getSelection();
  
	menu.addItem((item) => {
	  const itemDom = (item as any).dom as HTMLElement;
	  itemDom.addClass("askgpt-button");
	  item
		.setTitle("Ask GPT")
        .setIcon("bot")
		.onClick(async (e) => {
		  console.log("Ask GPT clicked");
          await plugin.logToConsole(editor);
		});
	});
  }