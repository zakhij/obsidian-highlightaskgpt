import {Editor, Plugin, Menu, App, ItemView, WorkspaceLeaf} from 'obsidian';
import { textToConsole, addContextMenu, createSelectableNotice, textToNotice } from 'src/functions';


export default class HighlightGPT extends Plugin {
    app: App;
    
	async onload() {
        this.addCommand({
            id: "texttoconsole",
            name: "Text to Console",
            editorCallback: (editor: Editor) => {
                textToConsole(editor, this);
                //this.openMySideView();
            },
        });

        this.addCommand({
            id: "create-selectable-notice",
            name: "Create Selectable Notice",
            editorCallback: (editor: Editor) => {
                textToNotice(editor, this);
            }
        })


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
