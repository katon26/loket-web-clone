import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ItemSelling from './ItemSelling.js'

export default function ComplexGrid() {
    return (
        <div style={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                Top Selling
            </Typography>
            <Paper>
                <Grid container direction="column">
                    <ItemSelling />
                    <div><hr /></div>
                    <ItemSelling />
                    <div><hr /></div>
                    <ItemSelling />
                </Grid>
            </Paper>
        </div>
    );
}
