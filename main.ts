import {Editor, Plugin} from 'obsidian';

export default class HighlightGPT extends Plugin {
	async onload() {
		//console.log("HELLO WORLD")
		this.addCommand({
			id: "text-to-console",
			name: "Text to Console",
			callback: () => {
                console.log("HEY THERE!");
			}
			});
		
	}
}

