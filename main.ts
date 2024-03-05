import {Editor, Plugin} from 'obsidian';

export default class HighlightGPT extends Plugin {
	async onload() {
		//console.log("HELLO WORLD")
		this.addCommand({
			id: "text-to-console",
			name: "Text to Console",
			editorCallback: (editor: Editor) => {
                //console.log("HEY THERE!");
				const selection = editor.getSelection();
				if (selection) {
					const selectedText = selection.toString().trim();
					if (selectedText.length > 0) {
						console.log(selectedText);
					}
					else {
						console.log("Must highlight some actual text.")
					}
					
				}
				else {
					console.log("No text highlighted")
					}

				}
		});
		
	}
}

