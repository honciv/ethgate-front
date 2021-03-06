import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TemporaryDrawer from "./TemporaryDrawer";
// import TextField from "@material-ui/core/TextField";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
import green from "@material-ui/core/colors/green";
import Grid from "@material-ui/core/Grid";
import {
  withStyles,
  // MuiThemeProvider,
  // createMuiTheme
} from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  cssLabel: {
    "&$cssFocused": {
      color: green[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: green[500]
    }
  }
});

// const theme = createMuiTheme({
//   palette: {
//     primary: green
//   }
// });

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24} style={{ justifyContent: "center" }}>
        <Grid
          item
          xs={11}
          s={10}
          md={11}
          style={{
            justifyContent: "center",
            flexBasis: "100%",
            maxWidth: "100%"
          }}
        >
          <AppBar position="static" className="header">
            <Toolbar className="toolbar">
              <TemporaryDrawer />

              <a
                href="//www.sberbank.ru"
                target="_blank"
                rel="noreferrer noopener"
                className="sberbank-logo"
                alt="logo"
              />
              <div
                className="eth-logo"
                alt=""
              />
              <Typography variant="title" className={classes.flex} />



              <Button>Login</Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
