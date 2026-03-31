(async () => {
    const getFortune = require('./fourtune')
    const fortune = getFortune();
    console.log(fortune);
})()