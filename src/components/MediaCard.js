import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1
  },
  media: {
    height: 260
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div className="cards">
      <Grid container spacing={24} style={{ "justifyContent": "center" }}>
        <Grid item xs={8} sm={4}>
          <Card className="card-unit" style={{ "backgroundColor": "#f6ebcd" }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/card-members.jpg"
                title="Участников форума"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  5000
                </Typography>
                <Typography component="p">Участников форума</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={8} sm={4}>
          <Card className="card-unit card-unit__eth" style={{ "backgroundColor": "#cbc2d2" }}>
            <CardActionArea>
              <CardMedia
                style={{"backgroundSize": "170px"}}
                className={classes.media}
                image="/static/images/card-etherium.jpg"
                title="Участников форума"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  2000
                </Typography>
                <Typography component="p">Кошельков Ethereum</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={8} sm={4}>
          <Card className="card-unit" style={{ "backgroundColor": "#a1dce4" }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/card-books.jpg"
                title="Участников форума"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  500
                </Typography>
                <Typography component="p">
                  книг в магазинах Сбербанка
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
