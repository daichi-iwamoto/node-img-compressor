const imagemin = require("imagemin-keep-folder")
const imageminMozjpeg = require("imagemin-mozjpeg")
const imageminPngquant = require("imagemin-pngquant")
const imageminGifsicle = require("imagemin-gifsicle")
const imageminSvgo = require("imagemin-svgo")

imagemin(['src/img/**/*.{jpg,jpeg,png,gif,svg}'], {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant(),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: output => {
    return output.replace(/img\//, "../dist/img/")
  },
}).then(() => {
  console.log("Images optimized")
})