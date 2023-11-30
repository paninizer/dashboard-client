import React from 'react';
import {getUserDetails, getGuildConfig} from '../../utils/api.js';
import { useNavigate, useParams } from 'react-router-dom';
import { DashboardMenu } from '../../components'


export function DashboardPage(props) {
  const navigate = useNavigate();
  const params = useParams();
  
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  //const [prefix, setPrefix] = React.useState('-');
  const [config, setConfig] = React.useState({});

  React.useEffect(()=> {
    getUserDetails()
      .then(({data}) => {
        //console.log(data);
        setUser(data);
        //console.log(user);
        //setLoading(false);
        return getGuildConfig(params.id);
      })
      .then(({data}) => {
        console.log(data);
        setConfig(data);
        setLoading(false);
      })
      .catch((err) => {
        //let history = useHistory();
        console.log(err);
        navigate(`/`);
        setLoading(false);
      });
  }, [] )
  
  return !loading && (
    <div>
      <h1>Dashboard Page</h1>
      <DashboardMenu user={user} config={config} guildId={params.id} />
    </div>
  )
}