const RETURNTIME = 200;
if (!localStorage.getItem("id")) {
  localStorage.setItem("id", 1111478)
}

function getId() {
  var id = parseInt(JSON.parse(localStorage.getItem("id"))) + 1;
  localStorage.setItem("id", id);
  return id;
}

function getDate() {
  return new Date().toLocaleDateString().replace(/\//g, '-')
}

function success(resolve, { data = null, msg = 'success' }) {
  setTimeout(() => {
    resolve({ code: 0, data, msg });
  }, RETURNTIME);
}

function error(resolve, { data = null, msg = 'error' }) {
  setTimeout(() => {
    resolve({ code: -1, data, msg });
  }, RETURNTIME);
}

function storageData(name, data) {
  try {
    localStorage.setItem(name, JSON.stringify(data));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

function getData(name) {
  return JSON.parse(localStorage.getItem(name)) || [];
}

function clearData(name) {
  localStorage.removeItem(name);
}

export default {
  getId,
  getDate,
  success,
  error,
  storageData,
  getData,
  clearData
}
