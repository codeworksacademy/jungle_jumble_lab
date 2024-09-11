import { AppState } from "../AppState.js"

class JumblesService {
  /**
   * @param {string} jumbleText
   */
  checkJumbleInput(jumbleText) {
    const activeJumble = AppState.activeJumble
    if (jumbleText != activeJumble.body) {
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
}

export const jumblesService = new JumblesService()