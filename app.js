(async () => { 
    const getFortune = require('./fourtune') // importing the fourtunes.js file 
    const fortune =  getFortune(); // calling the function to get a fortune 
    console.log(fortune);
})()