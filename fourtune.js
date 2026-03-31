const fortunes =require ('./fortunes.json')

module.exports = () => {
    const f = Math.floor(Math.random() * fortunes.length);
    return fortunes[f];
}
