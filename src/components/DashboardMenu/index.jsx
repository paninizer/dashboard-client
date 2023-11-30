import React from 'react';
import {Input, Button} from '@chakra-ui/react';
import { Formik } from 'formik';
import {updateGuildPrefix} from "../../utils/api"

export function DashboardMenu(props) {
  
  //const [prefix, setPrefix] = React.useState('-'); 
  return (
    <Formik
      initialValues={{ prefix: props.config.data.prefix}}
      onSubmit={ async ({ prefix }) => {
        try {
          updateGuildPrefix(props.guildId, prefix);
        } catch(e) {
          console.log(e);
        }
        //setPrefix(values);
      }}
    >
      <form onSubmit={props.handleSubmit}>
        <label>Bot Prefix</label>
        <Input type="text" name="prefix" onChange={props.handleChange} defaultValue={props.config.data.prefix} />
        <Button type="submit" colorScheme="blue" children="Update Prefix"/>
      </form>
    </Formik>
  )
}