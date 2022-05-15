import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import "../../Styles/HomeTabs.css";
import ProdExecutionScreen from '../ExecutionScreen/ProdExecutionScreen';
import InwdExecutionScreen from '../ExecutionScreen/InwdExecutionScreen';
import DispExecutionScreen from '../ExecutionScreen/DispExecutionScreen';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
  }
const ExecutionScreenTabs = () => {
  const theme = useTheme();
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-12 px-0'>
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
        <Tab label="Production Execution Screen" {...a11yProps(0)} className="tab-label"/>
        <Tab label="Inward Execution Screen" {...a11yProps(1)} className="tab-label"/>
        <Tab label="Dispatch Execution Screen" {...a11yProps(2)} className="tab-label" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      <TabPanel value={value} index={0} className="tabpanel">
      <ProdExecutionScreen/>
     </TabPanel>
     <TabPanel value={value} index={1} className="tabpanel">
     <InwdExecutionScreen/>
     </TabPanel>
     <TabPanel value={value} index={2} className="tabpanel">
     <DispExecutionScreen/>
     </TabPanel>
      </SwipeableViews>
    </Box>
    </div>
    </div>
    </div>
  )
}

export default ExecutionScreenTabs