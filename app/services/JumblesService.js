import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { loadState, saveState } from "../utils/Store.js"

class JumblesService {

  /**
   * @param {string} jumbleText
   */
  checkJumbleInput(jumbleText) {
    if (jumbleText != AppState.activeJumble.body) {
      return
    }
    this.endGame()
  }

  startGame() {
    AppState.activeJumble.startTime = Date.now()
  }

  endGame() {
    const activeJumble = AppState.activeJumble
    const timeElapsed = Date.now() - activeJumble.startTime
    if (timeElapsed < activeJumble.fastestTime) {
      activeJumble.fastestTime = timeElapsed
      this.saveJumbles()
    }
    AppState.activeJumble = null
    AppState.emit('jumbles')
  }

  /**
   * @param {string} jumbleId
   */
  setActiveJumble(jumbleId) {
    const foundJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
    AppState.activeJumble = foundJumble
    this.startGame()
  }

  createJumble(jumbleData) {
    const jumble = new Jumble(jumbleData)
    AppState.jumbles.push(jumble)
    this.saveJumbles()
  }

  saveJumbles() {
    saveState('jumbles', AppState.jumbles)
  }

  loadJumbles() {
    const jumbles = loadState('jumbles', [Jumble])
    if (jumbles.length == 0) {
      AppState.emit('jumbles')
    }
    else {
      AppState.jumbles = jumbles
    }
  }
}

export const jumblesService = new JumblesService()