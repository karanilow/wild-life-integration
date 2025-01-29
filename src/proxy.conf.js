const { env } = require('process');

const target = "https://apps.des.qld.gov.au";

const PROXY_CONFIG = [
  {
    context: [
      "/species/",
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;