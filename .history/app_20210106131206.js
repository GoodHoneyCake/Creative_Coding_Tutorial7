class App {
  constructor() {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Droid Serif"],
      },
    });
  }
}

window.onload = () => {
  new App();
};
