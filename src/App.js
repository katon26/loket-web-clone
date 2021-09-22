import Grid from '@mui/material/Grid';
import Featured from './components/Featured.js'
import Selling from './components/Selling.js'
import './App.css'

function App() {
  return (
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
  );
}

export default App;
