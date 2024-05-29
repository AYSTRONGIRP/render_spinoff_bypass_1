const link = "https://render-spinoff-bypass-2.onrender.com"
console.log("starting from render 1");
setInterval(() => {
    fetch(link).then(() =>{console.log(link);});
}, 1000*60*10); //every 10 minutes

const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})