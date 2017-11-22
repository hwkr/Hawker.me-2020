// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/brynn/Documents/Portfolio/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/brynn/Documents/Portfolio/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/brynn/Documents/Portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/brynn/Documents/Portfolio/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/brynn/Documents/Portfolio/.cache/json/layout-index.json"),
  "index.json": require("/Users/brynn/Documents/Portfolio/.cache/json/index.json")
}

exports.layouts = {
  "component---src-layouts-index-jsx": preferDefault(require("/Users/brynn/Documents/Portfolio/.cache/layouts/index.js"))
}