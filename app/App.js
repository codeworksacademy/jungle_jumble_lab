import { JumblesController } from './controllers/JumblesController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  JumblesController = new JumblesController()
  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
