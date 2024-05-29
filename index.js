const link = "https://lysos-assignmennt-backend.onrender.com"
console.log("starting from render 1");
setInterval(() => {
    fetch(link).then(() =>{console.log(link);});
}, 1000*60*10); //every 10 minutes