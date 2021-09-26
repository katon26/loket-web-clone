import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
    <>
    <h1 style={{ textAlign: "center", fontSize: '20px', fontWeight: 700, color: '#112041' }}>Temukan event sesuai minatmu</h1>
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered indicatorColor="secondary">
          <Tab label="LOKET Recommendation" {...a11yProps(0)} />
          <Tab label="Workshop Online" {...a11yProps(1)} />
          <Tab label="Konser Online" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box sx={{ flexGrow: 1, margin: "0 18em" }}>
          <Grid container spacing={3} sx={{ whiteSpace: 'nowrap', bgcolor: 'background.paper'}}>
            
          <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210813051824_61159e30931db.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Oct 30, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Ubud Village Jazz Festival 2021 - Live Streaming Ticket Day 2 (30 October 2021)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210916153813_614302754bb4f.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                09 Oct 2021 - 10 Oct 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      AVO - Future League Summit 2021
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210907120303_6136f2874e844.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Jul 24, 2021 - Sep 25, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Design Thinking: Understanding Consumer Needs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210907120303_6136f2874e844.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Jul 24, 2021 - Sep 25, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Design Thinking: Understanding Consumer Needs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210907120303_6136f2874e844.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Jul 24, 2021 - Sep 25, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Design Thinking: Understanding Consumer Needs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210907120303_6136f2874e844.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Jul 24, 2021 - Sep 25, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Design Thinking: Understanding Consumer Needs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <Box sx={{ flexGrow: 1, margin: "0 18em" }}>
          <Grid container spacing={3} sx={{ whiteSpace: 'nowrap', bgcolor: 'background.paper'}}>
            
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210907120303_6136f2874e844.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Sept 23, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Visual Branding for Social Media with Creative Nest Indonesia
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210916153813_614302754bb4f.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                09 Oct 2021 - 10 Oct 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      AVO - Future League Summit 2021
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210714141026_60ee8de26df69.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Jul 24, 2021 - Sep 25, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Design Thinking: Understanding Consumer Needs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
        <Box sx={{ flexGrow: 1, margin: "0 18em" }}>
          <Grid container spacing={3} sx={{ whiteSpace: 'nowrap', bgcolor: 'background.paper'}}>
            
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210813051824_61159e30931db.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Oct 30, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Ubud Village Jazz Festival 2021 - Live Streaming Ticket Day 2 (30 October 2021)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210813051824_61159e30931db.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Oct 30, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Ubud Village Jazz Festival 2021 - Live Streaming Ticket Day 2 (30 October 2021)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 224 }}>
                <CardMedia
                      component="img"
                      alt="green iguana"
                      height="106"
                      image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210813051824_61159e30931db.jpg"
                />
                <Typography gutterBottom variant="a" fontSize="14px" fontWeight="500" color="#fb7221" sx={{ ml: '16px' }} >
                Oct 30, 2021
                </Typography>
                <CardContent>
                  <Typography gutterBottom variant="h2" fontSize="14px" fontWeight="500" component="div" sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                  }}>
                      Ubud Village Jazz Festival 2021 - Live Streaming Ticket Day 2 (30 October 2021)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Event online
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </TabPanel>
    </Box>
    </>
  );
}
