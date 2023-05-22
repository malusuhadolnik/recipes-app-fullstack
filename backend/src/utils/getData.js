const axios = require('axios');

const getData = async (url) => {
  const result = await axios.get(url)
  return result.data;
}

module.exports = getData;