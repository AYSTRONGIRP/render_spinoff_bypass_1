const link = "https://render-spinoff-bypass-2.onrender.com"
console.log("starting from render 1");
setInterval(() => {
    try{
        fetch(link)
        .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text(); // Get the response as plain text
          })
          .then(text => {
            console.log(text); // Print "Hello World!" to the console
          })
        
    }
    catch(error) {
        
    }
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