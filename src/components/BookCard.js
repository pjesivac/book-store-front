import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 250,
    textDecoration: 'none'
  },
  media: {
    height: 350,
  },
});

const BookCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/book/${props.bookInfo.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.bookInfo.image}
            title={props.bookInfo.name}
          />
          <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
              {props.bookInfo.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Link to={`/book/${props.bookInfo.id}`}>
          <Button size="small" color="primary">
            Open
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default withRouter(BookCard);
