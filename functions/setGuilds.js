const { baseURL, handleError } = require("../Constants");
const fetch = require("node-fetch").default;

module.exports = async (guilds, botID, auth) => {
    const res = await fetch(baseURL + `set/guilds?guilds=${guilds}&bot=${botID}`, {
        body: JSON.stringify({
            auth
        })
    });

    handleError(res.status);
    
    return res;
}