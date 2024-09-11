import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class JumblesController {
  constructor() {
    console.log('Jumbles Controller Loaded 🐒');
    this.drawJumbles()
  }

  drawJumbles() {
    const jumbles = AppState.jumbles
    let jumblesHTML = ''
    jumbles.forEach(jumble => jumblesHTML += jumble.listHTMLTemplate)
    setHTML('jumbles-list', jumblesHTML)
  }
}