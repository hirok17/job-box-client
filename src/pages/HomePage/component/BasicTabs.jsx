import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import JobCart from './JobCart';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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
  const [categoris, setCategoris]=React.useState([]);
  const [jobs, setJobs]=React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(()=>{
    axios.get('http://localhost:5000/category')
    .then(res=>{
      console.log(res.data);
      setCategoris(res.data);
    })
  },[])
  const handelCategory=(category)=>{
    axios.get(`http://localhost:5000/jobs/${category}`)
    .then(res=>{
      setJobs(res.data);
      console.log(res.data);
    })

  }
  return (
    <section className='max-w-[1200px] mx-auto mt-16'>
      <h2 className='text-center text-4xl font-bold mb-8'>FEATURED JOBS</h2>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {
              categoris?.map(category=><Tab onClick={()=>handelCategory(category.category)} key={category._id} label={category.title} {...a11yProps(0)} />)
            }
            
            
          </Tabs>
      </Box>
      </Box>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
              {
                jobs?.map(job=><JobCart key={job._id} job={job}></JobCart>)
              }
            </div>
    </section>
  );
}