const fs = require('fs')
const content = "Test Content!"

const writeFile = async () => {
  console.log("let's write a file")

  return new Promise((resolve, reject) => {
    fs.writeFile('before.txt', content, err => {
      if (err) {
        console.error(err)
        reject(error)
      }
      console.log("Write file done!")
      resolve("")
    })
  })

}

const renameFile = async () => {
  console.log("let's do rename")
  fs.rename('before.txt', 'after.txt', err => {
    if (err) {
      console.error(err)
      return 
    }

    console.log("Rename file done")
  })
  console.log("Renaming started!")
}

writeFile()
  .then(renameFile)
  .catch(error => console.error(error))

