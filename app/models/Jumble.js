import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.fastestTime = 0
    this.startTime = 0
    this.endTime = 0
  }

  get listHTMLTemplate() {
    return `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <button class="btn btn-warning fw-bold" type="button">start</button>
      <b>${this.name}</b>
      <span class="fw-bold">⏲️ 12.2s</span>
      <span class="fw-bold">55.2 wpm</span>
    </div>
    `
  }
}