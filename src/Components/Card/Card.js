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
import {Link} from "react-router-dom";

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
  },
  anchor: {
    textDecoration: 'none',
    color: '#000'
  }
});

export const FoodCard = (props) => {
  const classes = useStyles();
  const {name, price, shortDescription, images, id} = props.item
  return (
    <Card className={classNames(classes.cardWrap, classes.foodCardWrap)}>
      <Link to={"/item/"+id} className={classes.anchor}>
        <CardActionArea className = {
          classNames(classes.cardActionArea, classes.foodCardActionArea)
        } component="div">
          <CardMedia
            component="img"
            height= '200'
            image = {images[0]}
            title={name}
            className = {
              classNames(classes.cardImg, classes.foodImg)
            }
          />
          <CardContent align="center">
            <Typography gutterBottom component="h6">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortDescription}
            </Typography>
            <Typography variant="h6" component="p">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
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