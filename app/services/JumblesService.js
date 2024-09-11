import { AppState } from "../AppState.js"

class JumblesService {
  /**
   * @param {string} jumbleId
   */
  setActiveJumble(jumbleId) {
    const foundJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
    foundJumble.startTime = Date.now()
    AppState.activeJumble = foundJumble
  }
}

export const jumblesService = new JumblesService()