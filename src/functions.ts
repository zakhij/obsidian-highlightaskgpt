
import HighlightGPT from "src/main";
import { Editor, Menu, App, Notice, Modal} from "obsidian";


export function addContextMenu(
	app: App,
	menu: Menu,
	editor: Editor,
    plugin: HighlightGPT,
  ): void {
	menu.addItem((item) => {
	  const itemDom = (item as any).dom as HTMLElement;
	  itemDom.addClass("t2c-button");
	  item
		.setTitle("Text to Console")
        .setIcon("bot")
		.onClick(async (e) => {
			console.log("T2C clicked");
			textToConsole(editor, plugin);
		});
  });
  menu.addItem((item) => {
    const itemDom = (item as any).dom as HTMLElement;
    itemDom.addClass("t2n-button");
    item
    .setTitle("Text to Notice")
        .setIcon("bot")
    .onClick(async (e) => {
      console.log("T2N clicked");
      textToNotice(editor, plugin);
    });
	});
}


export function textToNotice(editor: Editor, plugin: HighlightGPT) {
    const selection = editor.getSelection();
    if (selection) {
        const selectedText = selection.toString().trim();
        if (selectedText.length > 0) {
          createSelectableNotice(selectedText);
        } else {
          createSelectableNotice("Must highlight some actual text.");
        }
    } else {
        createSelectableNotice("No text highlighted");
    }
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




export function createSelectableNotice(content: string) {
  const existingNotice = document.querySelector('.selectable-notice');
    if (existingNotice) {
        existingNotice.remove();
    }

  const notice = document.createElement("div");
  notice.classList.add('selectable-notice'); // Unique class for identification

  notice.innerText = content;
  notice.style.position = "absolute";
  notice.style.top = "10px"; // Adjust as needed
  notice.style.right = "10px"; // Adjust as needed
  notice.style.width = "200px";
  notice.style.maxHeight = "80%"; // Maximum height to avoid oversizing
  notice.style.overflowY = "auto"; // Enable scroll for overflow
  notice.style.zIndex = "100";
  notice.style.backgroundColor = "#333"; // Match Obsidian theme or as desired
  notice.style.color = "white";
  notice.style.padding = "10px";
  notice.style.borderRadius = "5px";
  notice.style.border = "2px solid black";
  notice.style.userSelect = "text"; // Key for text selection


  // Create a close button
  const closeButton = document.createElement("button");
  closeButton.innerText = "x"; // Stylish close icon
  closeButton.style.position = "absolute";
  closeButton.style.top = "0";
  closeButton.style.right = "0";
  closeButton.style.backgroundColor = "transparent";
  closeButton.style.border = "none";
  closeButton.style.color = "white";
  closeButton.style.cursor = "pointer";
  
  // Append the close button to the notice
  notice.appendChild(closeButton);

  // Add click event listener to the close button to remove the notice when clicked
  closeButton.addEventListener('click', () => {
      notice.remove();
  });

  // Append the notice to the document body
  document.body.appendChild(notice);
}
