import React from 'react';
import {getUserDetails, getGuilds} from '../../utils/api';
import { Link } from 'react-router-dom';

export function MenuComponent({
  guilds,  
}) {

  return (
    <div>
      <h1>Hai</h1>
      {guilds.map((guild) => (
        <div id="guildLink">
          <li>{guild.name}</li>
          <Link to={ `/dashboard/${guild.id}` }>View Dashboard</Link>
        </div>
      ))}
    </div>
  )
}