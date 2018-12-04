import data from "./data"

var Storage = localStorage

for (var attr in data) {
  if (!Storage.getItem(attr)) {
    Storage.setItem(attr, JSON.stringify(data[attr]))
  }
}
