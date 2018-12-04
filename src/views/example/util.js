var mouse = {
  X: 0,
  Y: 0,
  init() {
    this.X = 0;
    this.Y = 0;
  },
  setData(event) {
    this.X = event.screenX;
    this.Y = event.screenY;
  },
  getMargin(event) {
    if (this.X || this.Y) {
      var margin = {
        X: event.screenX - this.X,
        Y: event.screenY - this.Y
      }
      this.setData(event);
      return margin;
    }
    this.setData(event);
  }

}


export {
  mouse
}
