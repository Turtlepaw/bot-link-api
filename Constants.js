module.exports.baseURL = "https://blink.trtle.xyz/api/";
module.exports.Error = (message) => {
    return new Error("Bot Link API Error: " + message);
}
module.exports.handleError = (status) => {
    if(status == 404){
        throw this.Error("404 BOT NOT FOUND")
    } else if(!status){
        throw this.Error("UNEXPECTED ERROR")
    } else {
        return 200;
    }
}