import config from "@/config"

var loader = (langmodel) => {
  return require(`./${langmodel}/index.js`);
}

var result = loader(config.lang);

export default result
