const { baseURL, handleError } = require("../Constants");
const fetch = require("node-fetch").default;

module.exports = async (uptime, botID, auth) => {
    const res = await fetch(baseURL + `set/uptime?uptime=${uptime}&bot=${botID}`, {
        body: JSON.stringify({
            auth
        })
    });

    handleError(res.status);
    
    return res;
}