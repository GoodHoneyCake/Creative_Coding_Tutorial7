import { Text } from "./text";

class App {
  constructor() {
    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fonctactive: () => {
        this.text = new Text();
        this.text.setText(
          "A",
          2,
          document.body.clientWidth,
          document.body.clientHeight
        );
      },
    });
  }
}

window.onload = () => {
  new App();
};
