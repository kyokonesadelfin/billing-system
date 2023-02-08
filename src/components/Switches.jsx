import React, { useState } from "react";
import { Switch, FormGroup, FormControlLabel } from '@mui/material';

const Switches = () => {
  const [toggled, setToggled] = useState(false);

  const switchStyles = {
    "&.MuiSwitch-root": {
      width: "60px",
      height: "30px",
      padding: "1px"
    },
    "& .MuiSwitch-switchBase": {
      transform: "translateX(7px)",
      "&$checked": {
        "& + $track": {
          backgroundColor: "#23bf58"
        }
      },
    },
    "& .MuiSwitch-thumb":{
      color: "white",
      width: "20px",
      height: "20px",
      margin: "1px",
      position: "absolute",
      top: "4px"
    },
    "& .MuiSwitch-track": {
      borderRadius: "20px",
      backgroundColor: "#818181",
      opacity: "1 !important",
      "&:after, &:before": {
        color: "white",
        fontSize: "12px",
        position: "absolute",
        top: "5px"
      },
      "&:after": {
        content: "'On'",
        left: "9px"
      },
      "&:before": {
        content: "'Off'",
        right: "9px"
      }
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "green",
      transform: "translateX(35px)"
    },
    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: 'green',
      
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={toggled}
            onChange={e => setToggled(e.target.checked)}
            name="checkedA"
            sx={switchStyles}
          />
        }
      />
    </FormGroup>
  );
};

export default Switches;

