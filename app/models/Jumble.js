import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  /**
   * @param {{ name: string; body: string; }} data
   */
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.fastestTime = 0
    this.startTime = 0
  }

  get listHTMLTemplate() {
    return `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <button onclick="app.JumblesController.setActiveJumble('${this.id}')" class="btn btn-warning fw-bold" type="button">start</button>
      <b>${this.name}</b>
      <span class="fw-bold">⏲️ 12.2s</span>
      <span class="fw-bold">55.2 wpm</span>
    </div>
    `
  }

  get gameHTMLTemplate() {
    return `
     <div class="jumble-card mb-4">
        <h3 class="d-flex justify-content-between">
          <span>Easy Jumble</span>
          <span>Fastest Time 34.1s</span>
        </h3>
        <p>${this.body}</p>
      </div>
      <div class="jumble-card">
        <form>
          <div class="form-floating mb-2">
            <textarea class="form-control" placeholder="Start Typing!!!!" id="jumble-game-input"></textarea>
            <label for="floatingTextarea">Start Typing!!!</label>
          </div>
          <button class="btn btn-info w-100">Submit</button>
        </form>
      </div>
    `
  }
}