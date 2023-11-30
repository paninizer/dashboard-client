import React from 'react';
import {getUserDetails, getGuilds} from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { MenuComponent } from "../../components"

export function MenuPage(props) {

  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [guilds, setGuilds] = React.useState([]);

  React.useEffect(()=> {
    getUserDetails()
      .then( ( {data} ) => {
        //console.log(data);
        setUser(data);
        //console.log(user);
        setLoading(false);
        return getGuilds();
      }).then(({data}) => {
        //console.log(data);
        setGuilds(data);
      }).catch((err) => {
        //let history = useHistory();
        console.log(err);
        navigate(`/`);
      });
  }, [] )
  
  return !loading && (
    <div>
      <h1>Menu Page</h1>
      <MenuComponent guilds = {guilds} />
    </div>
  )
}