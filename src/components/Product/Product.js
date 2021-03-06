import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    
    const { _id, name, price, imageURL} = props.product;
    

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 280,
        },
    });
        const classes = useStyles();
    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h6">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography gutterBottom variant="h5" component="h2">
                    <span className="product-price">${price}</span>
                </Typography>
                <Button  size="large" color="primary"><Link to={"/product/"+_id}>
                    <span className="buy-now-btn">Buy Now</span>
                </Link>
                 </Button>
            </CardActions>
        </Card>
    );
};

export default Product;