import Grid from '@mui/material/Grid';
import Featured from './components/Featured.js'
import Selling from './components/Selling.js'
import Nav from './components/Nav.js';
import Content from './components/slideContent.js';
import EventTabs from './components/EventTabs';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'



function App() {
  return (
    <>
    <Nav/>

    <Content />

    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
    >
      <Grid item lg={4} sm={12}>
        <Featured title="Featured Event" />
      </Grid>
      <Grid item lg={4} sm={12}>
        <Selling />
      </Grid>
    </Grid>

    <EventTabs/>
    </>
  );
}

export default App;
