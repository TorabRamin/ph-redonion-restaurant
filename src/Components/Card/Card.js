import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
      <CardActionArea className = {
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

const SingleCard = (props) => {
  const classes = useStyles();
  const {title, image, icon, description} = props.feature

  return (
    <Card className={classes.cardWrap}>
      <CardActionArea component="div" className={classes.cardActionArea}>
        <CardMedia
          alt={title}
          component="img"
          height= {props.height}
          image = {image}
          title={title}
          className={classes.cardImg}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <img alt="complex" src={icon} />
            </Grid>
            <Grid item sm>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
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