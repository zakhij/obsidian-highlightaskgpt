import {Editor, Plugin, Menu, App} from 'obsidian';
import { textToConsole, addContextMenu } from 'src/functions';


export default class HighlightGPT extends Plugin {
    app: App;
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
            id: "texttoconsole",
            name: "Text to Console",
            editorCallback: (editor: Editor) => {
                textToConsole(editor, this);
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
		addContextMenu(this.app, menu, editor, this);
	  };
}

