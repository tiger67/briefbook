let id = 14242527
const RETURNTIME = 200;

function getId() {
  return ++id;
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
export default {
  getId,
  getDate,
  success,
  error
}
