import React, { useEffect, useState } from "react";
import { FormGroup, FormControlLabel } from '@mui/material';
import Switch from 'react-switch';


const Switches = ({data}) => {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    if(data.status === "WORKING") {
      setToggled(true)
    } else {
      setToggled(false)
    }
  }, [data])

  const handleChange = (nextChecked) => {
    setToggled(nextChecked);
    if (toggled === true ) {
      const retVal = window.confirm('Are you sure you want to deactivate?');
      if(retVal === true) {
        setToggled(false);
        let token = 'e37e8b7178e64ca685b905c17029bcaf';
        fetch(`https://api.cloud-gms.com/v3/devices/10227026/activation`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            desiredStatus: 'INACTIVE'
          })
        })
        .then(res=>res.json())
          .catch(err => {
            console.error('Request failed', err)
          })
          .then(data => {
            console.log(data)
            if(data) {
              alert(`Successfully updated status to ${data.desiredStatus}`)
              } else {
              alert('Error in updating status.')
            }
          })
      } else {
        setToggled(true);
      }
    } else {
      const retVal = window.confirm('Are you sure you want to activate?');
      if(retVal === true) {
        setToggled(true);
        let token = 'e37e8b7178e64ca685b905c17029bcaf';
        fetch(`https://api.cloud-gms.com/v3/devices/10227026/activation`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            desiredStatus: 'ACTIVE'
          })
        })
        .then(res=>res.json())
          .catch(err => {
            console.error('Request failed', err)
          })
          .then(data => {
            console.log(data)
            if(data) {
              alert(`Successfully updated status to ${data.desiredStatus}`)
              } else {
              alert('Error in updating status.')
            }
          })
      } else {
        setToggled(false);
      }
    }
    
  };
  
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={toggled}
            onChange={handleChange}
            uncheckedIcon={
              <div style={{paddingTop: '3px', paddingLeft: '2px', fontSize: '0.8rem', color: '#FFFFFF'}}>Off</div>
            }
            checkedIcon={
              <div style={{paddingTop: '3px', paddingLeft: '4px', fontSize: '0.8rem', color: '#FFFFFF'}}>On</div>
            }
          />
        }
      />
    </FormGroup>
  );
};

export default Switches;

