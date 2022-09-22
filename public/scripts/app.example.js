class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById('cars-container');
    this.btnCari = document.getElementById('btn-cari');
    this.date = document.getElementById('date');
    this.time = document.getElementById('time');
    this.jumlah = document.getElementById('jumlah');
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.btnCari.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement('div');
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
