const Xray = require('x-ray')
const imageDownloader = require('node-image-downloader')
const xray = Xray()

// adjust config as needed
const baseURL = 'https://cernogroup.com'
const URL = `${baseURL}/products/`
const selector = '.cat-container img'

// do not change shape key "uri" - required by node-image-downloader
const shape = {
  uri: '@src'
}

// make sure directory exists
const destinationDirectory = 'images'

// execute scrape - adjust download logging as needed
xray(URL, selector, [shape])((err, res) => {
  if(err) throw err
  console.log('RESULTS', res)
  imageDownloader({
    imgs: res,
    dest: `./${destinationDirectory}`
  })
    .then(info => {
      console.log('INFO', info)
    })
    .catch((error, response, body) => {
      console.log("ERROR", error)
    })
})
