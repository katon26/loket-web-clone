import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Banner() {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems='center'
            bgcolor='#2950A6'
            marginTop='50px'
        >
            <Grid item lg={4} sm={12}>
                <img style={{ width: '100%' }} src="https://loket-asset-production.s3.amazonaws.com/loket-live.png" alt="" />
            </Grid>
            <Grid item lg={4} sm={12}>
                <Grid
                    container
                    direction='column'
                    justifyContent='center'
                >
                    <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'white' }}>Buat Event Online sekarang lebih mudah di LOKET</Typography>
                    <Typography mt={2} variant='body2' sx={{ color: 'white' }}>Mulai dari acara musik, diskusi, workshop hingga online webinar LOKET sekarang hadir dengan fitur LOKET LIVE untuk event creator yang membutuhkan layanan streaming langsung</Typography>
                    <Button sx={{ marginTop: '10px', width: '180px', fontWeight: 'bold', textTransform: "uppercase" }} variant="contained" color="warning">
                        buat event
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}