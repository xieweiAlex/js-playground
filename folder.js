
const fs = require('fs')
const path = require('path')

const folderPath = '/Users/Alex_Xie/Movies'

const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}

files = fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})
.filter(isFile)

console.log(files)


