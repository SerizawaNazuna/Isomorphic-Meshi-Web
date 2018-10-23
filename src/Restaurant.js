import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const Restaurant = (props) =>{
  return(
    <Grid item xs={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            image={props.info.image_url.shop_image1}
            style={{height: 140}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.info.name}
            </Typography>
            <Typography component="p">
              {props.info.pr.pr_short}
            </Typography>
            <Typography component="p">
              ランチ予算:{props.info.lunch}円
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={props.info.url} target="blank">
            <Button size="small" color="primary">
              ぐるなびページへ
            </Button>
          </a>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default Restaurant