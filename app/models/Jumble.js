import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  /**
   * @param {{ name: string; body: string; fastestTime?: number }} data
   */
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.fastestTime = data.fastestTime || Infinity
    this.startTime = 0
  }

  get listHTMLTemplate() {
    return `
    <div class="d-md-flex justify-content-between align-items-center mb-2">
      <div>
        <button onclick="app.JumblesController.setActiveJumble('${this.id}')" class="btn btn-warning fw-bold" type="button" title="${this.startButtonTitle}">
          start
        </button>
        <b>${this.name}</b>
      </div>
      <div class="${this.fastestTime == Infinity ? 'd-none' : ''}">
        <span class="fw-bold me-2" title="Fastest time is ${this.fastestTimeInSeconds}">⏲️ ${this.fastestTimeInSeconds}</span>
        <span class="fw-bold">${this.fastestWordsPerMinute.toFixed(1)} wpm</span>
      </div>
    </div>
    <hr>
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
  get wordCount() {
    return this.body.split(' ').length
  }
  get fastestWordsPerMinute() {
    return this.wordCount * 60 / this.fastestTimeInSeconds
  }

  get startButtonTitle() {
    return `Start the ${this.name}! This Jumble has a total of ${this.wordCount} words!`
  }

  static get placeHolderHTMLTemplate() {
    return `
     <div class="jumble-card h-100 p-0">
        <marquee behavior="alternate" direction="up" class="h-100">
          <marquee behavior="alternate" direction="left" scrollamount="50">
            <span class="display-1">${this.randomEmoji}</span>
          </marquee>
        </marquee>
      </div>
    `
  }

  static get randomEmoji() {
    const emojis = [
      '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🫏', '🐒', '🐛', '🦋',
      '🐌', '🐞', '🐜', '🦟', '🦗', '🦂', '🦀', '🦞', '🦐', '🦑',
      '🐙', '🐠', '🐟', '🐡', '🐬', '🐳', '🐋', '🐊', '🐢', '🦎',
      '🐍', '🦖', '🦕', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🦏',
      '🦛', '🐘', '🦒', '🦘', '🦥', '🦦', '🦨', '🦡', '🐇', '🐿️',
      '🦔', '🐝'
    ]
    const randomIndex = Math.floor(Math.random() * emojis.length)
    return emojis[randomIndex]

  }

}