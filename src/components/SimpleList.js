import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AndroidIcon from "@material-ui/icons/Android";
import PeopleIcon from "@material-ui/icons/People";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">


        <ListItem>
        <a
          href="//www.sberbank.ru"
          target="_blank"
          rel="noreferrer noopener"
          className="sberbank-logo"
          alt="logo"
        />
        </ListItem>

        <ListItem button component="a" href="#user-list">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Онлайн-таблица" />
        </ListItem>

        <ListItem button component="a" href="#admin-list">
          <ListItemIcon>
            <AndroidIcon />
          </ListItemIcon>
          <ListItemText primary="Администратор" />
        </ListItem>
      </List>
      {/* <Divider /> */}
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
