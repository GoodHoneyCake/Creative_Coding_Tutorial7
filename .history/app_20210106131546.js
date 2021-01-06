class App {
  constructor() {
    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fonctactive: () => {},
    });
  }
}

window.onload = () => {
  new App();
};
