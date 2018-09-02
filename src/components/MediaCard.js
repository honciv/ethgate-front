import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    height: 240
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} className="card-unit">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/500/200/?random"
          title="Участников форума"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            500
          </Typography>
          <Typography component="p">Участников форума</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
