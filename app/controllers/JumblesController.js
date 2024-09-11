import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class JumblesController {
  constructor() {
    console.log('Jumbles Controller Loaded 🐒');
    AppState.on('activeJumble', this.drawActiveJumble)
    AppState.on('jumbles', this.drawJumbles)

    jumblesService.loadJumbles()
  }

  drawActiveJumble() {
    if (AppState.activeJumble == null) {
      setHTML('jumble-game', '')
    }
    else {
      setHTML('jumble-game', AppState.activeJumble.gameHTMLTemplate)
      document.getElementById('jumble-game-input').focus()
    }
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

  checkJumbleInput() {
    event.preventDefault()
    const formElem = event.target
    // @ts-ignore
    const jumbleText = formElem.jumbleGameBody.value
    jumblesService.checkJumbleInput(jumbleText)
  }

  createJumble() {
    event.preventDefault()
    const formElem = event.target
    const jumbleData = getFormData(formElem)
    jumblesService.createJumble(jumbleData)
    // @ts-ignore
    formElem.reset()
  }
}