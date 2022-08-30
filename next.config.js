const withPlugins = require("next-compose-plugins");
module.exports =  withPlugins([], {})
module.exports = {
    trailingSlash: true,
    images: {
        loader: "imgix",
        path: "https://image.tmdb.org/t/p/w500/",
      }
}