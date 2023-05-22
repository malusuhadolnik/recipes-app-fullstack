const axios = require('axios');

const getData = async (url) => {
  const result = await axios.get(url)
  return (JSON.stringify(result));
}

module.exports = getData;