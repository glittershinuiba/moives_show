import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Showmovies from './Showmovies';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "black",
    color:'white'
  },
}));

export default function SortTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  const [lables, setlables] = useState("Science");
  const [count, setcount] = useState(0);
  const [Data, setDate_json] = useState([]);

  useEffect(() => {
    wait();
  }, [count]
  )

  function wait() {
    console.log('api 调用' + count);

    var url = "http://localhost:8000";
    fetch(`${url}/${lables}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          alert(res.status);
          return;
        }
      })
      .then(data => { setDate_json(data); }
      );
    setcount(0);
  }


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          style={{backgroundColor:'black',color:'white'}}
          
        >
          <Tab label="Science" {...a11yProps(0)} onClick={e=>{setlables("Science"); setcount(1);}}/>
          <Tab label="Comedy" onClick={e=>{setlables("Comedy"); setcount(1);}} {...a11yProps(1)} />
          <Tab label="Crime" {...a11yProps(2)} onClick={e=>{setlables("Crime"); setcount(1);}} />
          <Tab label="Romance" {...a11yProps(3)} onClick={e=>{setlables("Romance"); setcount(1);}} />
          <Tab label="Action" {...a11yProps(4)} onClick={e=>{setlables("Action"); setcount(1);}} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      {Data.length > 0 ? <Showmovies data={Data} ></Showmovies> : <p> loading</p>}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {Data.length > 0 ? <Showmovies data={Data} ></Showmovies> : <p> loading</p>}
      </TabPanel>
      <TabPanel value={value} index={2}>
      {Data.length > 0 ? <Showmovies data={Data} ></Showmovies> : <p> loading</p>}
      </TabPanel>
      <TabPanel value={value} index={3}>
      {Data.length > 0 ? <Showmovies data={Data} ></Showmovies> : <p> loading</p>}
      </TabPanel>
      <TabPanel value={value} index={4}>
      {Data.length > 0 ? <Showmovies data={Data} ></Showmovies> : <p> loading</p>}
      </TabPanel>
      
    </div>
  );
}