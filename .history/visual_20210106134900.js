import { Text } from "./text.js";

import { BounceString } from "./bouncestrings.js";

export class Visual {
  constructor() {
    this.text = new Text();

    this.strings = [];

    this.mouse = {
      x: 0,
      y: 0,
      radius: 100,
    };
    document.addEventListener("pointermove", this.onMove.bind(this), false);
  }

  onMove(e) {
    this.mouse.x = e.clientX;
  }
}
