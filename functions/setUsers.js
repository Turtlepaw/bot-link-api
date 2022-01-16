const { baseURL, handleError } = require("../Constants");
const fetch = require("node-fetch").default;

module.exports = async (users, botID, auth) => {
    const res = await fetch(baseURL + `set/users?users=${users}&bot=${botID}`, {
        body: JSON.stringify({
            auth
        })
    });

    handleError(res.status);
    
    return res;
}