# Image Scraper
A quick configurable image scraper using x-ray and node-image-downloader for 2020.

## requires nodejs v8+

**Adjust configuration as needed**

1. Starting on line 6 of index.js, update baseURL, URL, and selector variables to suit your needs.
2. If you're just wanting to grab the image src attribute leave line 12 as is.  You can add properties to the shape object, if you need any other attributes from the source data (i.e. alt or class attributes for subsequent filtering).  See [x-ray docs](https://www.npmjs.com/package/x-ray).
3. Before you execute your scraper, make sure the destination directory exists.  I might update the project to support non-existant destination directories in the future.

**Scrape away**
1. `imageDownloader` is returning a promise. If you have any doubts or need to adjust logging, take a look at any errors in the console and adjust your logging as needed in xray's callback.  See [node-image-downloader docs](https://www.npmjs.com/package/node-image-downloader) for more information.
