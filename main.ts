import {Editor, Plugin, Menu, App, EventRef} from 'obsidian';
import contextMenu from './contextmenu';


export default class HighlightGPT extends Plugin {
	async logToConsole(editor: Editor) {
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
	
	async onload() {
        this.addCommand({
            id: "text-to-console",
            name: "Text to Console",
            editorCallback: (editor: Editor) => {
                this.logToConsole(editor);
            },
        });
    
		this.registerEvent(
			this.app.workspace.on("editor-menu", this.handleContextMenu)
		);
	
	}
	handleContextMenu = (
		menu: Menu,
		editor: Editor
	  ): void => {
		contextMenu(this.app, menu, editor, this);
	  };
}

