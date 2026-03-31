const fortunes =require ('./fortunes.json') //this is the fortunes array

module.exports =  () => { // function  
    const f = Math.floor(Math.random() * fortunes.length);//this line does the random selection
    return fortunes[f];
}
