import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  /**
   * @param {{ name: string; body: string; }} data
   */
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.fastestTime = Infinity
    this.startTime = 0
  }

  get listHTMLTemplate() {
    return `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <div>
        <button onclick="app.JumblesController.setActiveJumble('${this.id}')" class="btn btn-warning fw-bold" type="button">start</button>
        <b>${this.name}</b>
      </div>
      <div class="${this.fastestTime == Infinity ? 'd-none' : ''}">
        <span class="fw-bold me-2" title="Fastest time is ${this.fastestTimeInSeconds}">⏲️ ${this.fastestTimeInSeconds}</span>
        <span class="fw-bold">${this.fastestWordsPerMinute.toFixed(1)} wpm</span>
      </div>
    </div>
    `
  }

  get gameHTMLTemplate() {
    return `
     <div class="jumble-card mb-4">
        <h3 class="d-flex justify-content-between">
          <span>${this.name}</span>
          <span class="${this.fastestTime == Infinity ? 'd-none' : ''}">Fastest Time ${this.fastestTimeInSeconds.toFixed(1)}s</span>
        </h3>
        <p>${this.body}</p>
      </div>
      <div class="jumble-card">
        <form onsubmit="app.JumblesController.checkJumbleInput()">
          <div class="form-floating mb-2">
            <textarea class="form-control" placeholder="Start Typing!!!!" id="jumble-game-input" name="jumbleGameBody"></textarea>
            <label for="floatingTextarea">Start Typing!!!</label>
          </div>
          <button class="btn btn-info w-100">Submit</button>
        </form>
      </div>
    `
  }

  get fastestTimeInSeconds() {
    return this.fastestTime / 1000
  }

  get fastestWordsPerMinute() {
    const wordCount = this.body.split(' ').length
    return wordCount * 60 / this.fastestTimeInSeconds
  }
}