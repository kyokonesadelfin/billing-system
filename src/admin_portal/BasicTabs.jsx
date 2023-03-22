import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchBar from './SearchBar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Manage Users" {...a11yProps(0)} style={{ marginRight: '60px', fontWeight: '700' }} />
          <Tab label="Branch" {...a11yProps(1)} style={{ marginRight: '60px', fontWeight: '700' }} />
          <Tab label="Department" {...a11yProps(2)} style={{ marginRight: '60px', fontWeight: '700' }} />
          <Tab label="Position" {...a11yProps(3)} style={{ marginRight: '60px', fontWeight: '700' }} />
          <Tab label="Access" {...a11yProps(3)} style={{ marginRight: '60px', fontWeight: '700' }} />
          <Tab label="Activity Logs" {...a11yProps(3)} style={{ fontWeight: '700' }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div style={{display: 'flex', flexWrap: 'wrap' }}>
      <SearchBar />
        <Stack spacing={2} direction="row">
          <Button  variant="contained" style={{height: '40px', marginTop: '10px', marginLeft: '30px'}}>
          <NavLink to='/adduser' style={{textDecoration: 'none', color: 'white'}}>Add new user</NavLink></Button>
        </Stack>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{display: 'flex', flexWrap: 'wrap' }}>
      <SearchBar />
        <Stack spacing={2} direction="row">
          <Button  variant="contained" style={{height: '40px', marginTop: '10px', marginLeft: '30px'}}>
          <NavLink to='/adduser' style={{textDecoration: 'none', color: 'white'}}>Add new user</NavLink></Button>
        </Stack>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div style={{display: 'flex', flexWrap: 'wrap' }}>
      <SearchBar />
        <Stack spacing={2} direction="row">
          <Button  variant="contained" style={{height: '40px', marginTop: '10px', marginLeft: '30px'}}>
          <NavLink to='/adduser' style={{textDecoration: 'none', color: 'white'}}>Add new user</NavLink></Button>
        </Stack>
      </div>
      </TabPanel>
    </Box>
  );
}