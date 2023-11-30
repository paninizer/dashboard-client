import axios from 'axios';

export function getUserDetails() {
  return axios.get("https://dashboard-blucher.panzer-chan.repl.co/api/auth", {withCredentials: true});
}

export function getGuilds() {
  return axios.get("https://dashboard-blucher.panzer-chan.repl.co/api/discord/guilds", {withCredentials: true});  
}

export function getGuildConfig(guildId) {
  return axios.get(`https://dashboard-blucher.panzer-chan.repl.co/api/discord/guilds/${guildId}/config`, {withCredentials: true});
}

export function updateGuildPrefix(guildId, prefix) {
  return axios.put(
    `https://dashboard-blucher.panzer-chan.repl.co/api/discord/guilds/${guildId}/prefix`, {
      prefix
    },{
      withCredentials: true
    }
  )
}