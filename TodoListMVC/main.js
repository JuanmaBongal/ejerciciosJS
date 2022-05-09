import Controller from "./scriptController.js";
import Model from "./scriptModel.js";
import View from "./scriptView.js";
  
(function() {
    const app = new Controller(new Model(), new View())
}
)();