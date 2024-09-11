import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";
import { setHTML } from "../utils/Writer.js";

export class JumblesController {
  constructor() {
    AppState.on('activeJumble', this.drawActiveJumble)
    console.log('Jumbles Controller Loaded 🐒');
    this.drawJumbles()
  }
  drawActiveJumble() {
    setHTML('jumble-game', AppState.activeJumble.gameHTMLTemplate)
  }

  drawJumbles() {
    const jumbles = AppState.jumbles
    let jumblesHTML = ''
    jumbles.forEach(jumble => jumblesHTML += jumble.listHTMLTemplate)
    setHTML('jumbles-list', jumblesHTML)
  }

  /**
   * @param {string} jumbleId
   */
  setActiveJumble(jumbleId) {
    jumblesService.setActiveJumble(jumbleId)
  }
}