import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {Card, Grid, ButtonBase} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import classNames from 'classnames';

const useStyles = makeStyles({
  cardImg: {
    borderRadius: '20px'
  },
  cardWrap: {
    borderRadius: '20px',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0 8px 10px #e2dfdf'
    }
  },
  cardActionArea: {
    borderRadius: '20px',
    '&:hover': {}
  },
  foodCardWrap: {
    borderRadius: '10px'
  },
  foodImg: {
    padding: '16px 16px 0 16px',
    objectFit: 'contain'
  },
  foodCardActionArea: {
    borderRadius: 10
  }
});

export const FoodCard = () => {
  const classes = useStyles();

  return (
    <Card className={classNames(classes.cardWrap, classes.foodCardWrap)}>
      < CardActionArea className = {
        classNames(classes.cardActionArea, classes.foodCardActionArea)
      } >
        <CardMedia
          component="img"
          height= '200'
          image = "https://i.ibb.co/pdfGzyp/breakfast1.png"
          title="Contemplative Reptile"
          className = {
            classNames(classes.cardImg, classes.foodImg)
          }
        />
        <CardContent align="center">
          <Typography gutterBottom component="h6">
            Fast Delivery
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            How we dream about our future
          </Typography>
          <Typography variant="h6" component="p">
            $23.99
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const SingleCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardWrap}>
      <CardActionArea component="div" className={classes.cardActionArea}>
        <CardMedia
          alt="Contemplative Reptile"
          component="img"
          height="350"
          image = "https://i.ibb.co/55HN8q5/fast-delivery.png"
          title="Contemplative Reptile"
          className={classes.cardImg}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <img alt="complex" src="https://i.ibb.co/1nz9kZH/bus.png" />
            </Grid>
            <Grid item sm>
              <Typography gutterBottom variant="h5" component="h2">
                Fast Delivery
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future
              </Typography>
              <Button size="small" color="primary" style={{padding: '0', marginTop: '8px'}}>
                Learn More <ArrowForwardIcon/>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SingleCard;