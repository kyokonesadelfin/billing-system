import React, { useEffect, useState } from "react";
import Switch from 'react-switch';
import '../sass/billing.scss'

const Switches = ({ data }) => {
  const [toggled, setToggled] = useState(false);


  useEffect(() => {
    
    if (data.activation.desiredStatus === 'ACTIVE' || data.activation.desiredStatus === 'ACTIVE_ONESHOT') {

      setToggled(true);

    } else {

      setToggled(false)

    }

  }, [data.activation.desiredStatus, data.activation.currentStatus])

  const handleChange = (nextChecked) => {

    setToggled(nextChecked);

    if (toggled === true) {

      const retVal = window.confirm('Are you sure you want to deactivate this device?');

      if (retVal === true) {

        setToggled(false);
        // Activate Device API
        fetch(`https://api.cloud-gms.com/v3/devices/10227026/activation`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            desiredStatus: 'INACTIVE'
          })
        })
          .then(res => res.json())
          .catch(err => {
            console.error('Request failed', err)
          })
          .then(data => {

            console.log(data)

            if (data) {

              alert(`Successfully updated status to ${data.desiredStatus}`)
              window.location.reload();

            } else {

              alert('Error in updating status.')

            }
          })
      } else {

        setToggled(true);

      }
    } else {

      const retVal = window.confirm('Are you sure you want to activate this device?');

      if (retVal === true) {

        setToggled(true);

        // Deactivate Device API
        fetch(`https://api.cloud-gms.com/v3/devices/10227026/activation`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            desiredStatus: 'ACTIVE'
          })
        })
          .then(res => res.json())
          .catch(err => {

            console.error('Request failed', err)

          })
          .then(data => {

            if (data) {

              alert(`Successfully updated status to ${data.desiredStatus}`)
              window.location.reload();

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
    <Switch
      checked={toggled}
      onChange={handleChange}
      uncheckedIcon={
        <div style={{ paddingTop: '3px', paddingLeft: '2px', color: '#FFFFFF' }}></div>
      }
      checkedIcon={
        <div style={{ paddingTop: '3px', paddingLeft: '4px', color: '#FFFFFF' }}></div>
      }
    />
  );
};

export default Switches;

