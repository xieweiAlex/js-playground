
const fs = require('fs')

// fs.readFile('./unknown.js', 'utf8' , (err, data) => {
// fs.readFile('./promise.js', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log("We have got the file content as below:")
//   console.log(data)
// })

const content = "\nSome test content!"
fs.appendFile('./test-content.md', content, err => {
  if (err) {
    console.error(err)
    return 
  }
  console.log("Append done!")
})
