import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MapIcon from '@mui/icons-material/Map';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '110px',
    height: '110px',
    objectFit: 'cover',
    borderRadius: '10px'
});

export default function ComplexGrid() {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210729180943_61028c77f06e5.jpg" />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            IKIGAI - Sahamology
                        </Typography>
                        <Stack direction="row" spacing={0.7} alignItems="center">
                            <Avatar
                                alt="Remy Sharp"
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                                sx={{ width: 18, height: 18 }}
                            />
                            <Typography gutterBottom variant="caption" component="div">
                                Sahamology
                            </Typography>
                        </Stack>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <div style={{ display: "flex", alignItems: "center", marginLeft: "-1px" }}>
                                <EventAvailableIcon fontSize="small" color="warning" />
                                <span style={{ marginLeft: "5px", fontSize: "13px" }}>Sep 26, 2021</span>
                            </div>
                            <Button variant="contained" sx={{ width: "100px", fontWeight: "bold" }} color="warning">BELI</Button>
                        </Grid>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: "-1px" }}>
                            <MapIcon fontSize="small" color="warning" />
                            <span style={{ marginLeft: "5px", fontSize: "13px" }}>Event Online</span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}