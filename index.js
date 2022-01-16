const setGuilds = require("./functions/setGuilds");
const setUptime = require("./functions/setUptime");
const setUsers = require("./functions/setUsers");
const Discord = require("discord.js");

/**
 * @typedef Params
 * @property {String} auth
 * @property {String} botID
 */

/**
 * 
 * @param {Params} params 
 * @param {Number} time 
 * @param {Function} callback 
 * @param {Discord.Client} client
 */
module.exports.Auto = async (params, client, time=8000, callback) => {
    setInterval(async () => {
        await setGuilds(await (await client.guilds.fetch()).size);
        await setUptime(client.uptime);
        await setUsers(client.users.cache.size);
    }, time);
}

module.exports = {
    setUsers,
    setGuilds,
    setUptime
}