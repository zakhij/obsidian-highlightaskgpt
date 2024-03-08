
import HighlightGPT from "src/main";
import { Editor, Plugin, Menu, App} from "obsidian";

export function addContextMenu(
	app: App,
	menu: Menu,
	editor: Editor,
    plugin: HighlightGPT,
  ): void {
  
	menu.addItem((item) => {
	  const itemDom = (item as any).dom as HTMLElement;
	  itemDom.addClass("askgpt-button");
	  item
		.setTitle("Ask GPT")
        .setIcon("bot")
		.onClick(async (e) => {
			console.log("Context menu item clicked");
			textToConsole(editor, plugin);
		});
	});
  }

export function textToConsole(editor: Editor, plugin: HighlightGPT) {
    const selection = editor.getSelection();
    if (selection) {
        const selectedText = selection.toString().trim();
        if (selectedText.length > 0) {
            console.log(selectedText);
        } else {
            console.log("Must highlight some actual text.");
        }
    } else {
        console.log("No text highlighted");
    }
    }