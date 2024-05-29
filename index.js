const link = "https://render-spinoff-bypass-2.onrender.com"
console.log("starting from render 1");
setInterval(() => {
    fetch(link)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response.data)
    console.log(response)
  })
}, 1000); //every 1 minutes

const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})