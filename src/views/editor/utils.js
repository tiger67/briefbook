let id = 14242527

function getId() {
  return ++id;
}

function getDate() {
  return new Date().toLocaleDateString().replace(/\//g, '-')
}

export default {
  getId,
  getDate
}
