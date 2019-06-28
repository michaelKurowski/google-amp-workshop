module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{svg,ejs,js}"
  ],
  "swDest": "dist/sw.js",
  "swSrc": "src_sw.js"/*,
  
  "ignoreURLParametersMatching": [/^amp_/] // ignore querry params in path that start with amp_*/
};