import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
    return (
        <div style={{ p: 2, margin: 'auto', maxWidth: 500 }}>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                {props.title}
            </Typography>
            <Card style={{ height: 420, maxHeight: 420 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210505045525.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                        Indonesia Modification Expo 2021 Limitless-All Virtual
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Menangkan kesempatan mendapatkan mobil dalam event online keren yang satu ini! Tunggu apalagi?
                    </Typography>
                </CardContent>
                <CardActions style={{ paddingLeft: '15px' }}>
                    <Button sx={{ fontWeight: 'bold', textTransform: "uppercase" }} variant="contained" color="warning" endIcon={<ShoppingCartIcon />}>
                        beli tiket
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}