import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TemporaryDrawer from "./TemporaryDrawer";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import green from "@material-ui/core/colors/green";
import Grid from "@material-ui/core/Grid";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
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
  // bootstrapRoot: {
  //   padding: 0,
  //   "label + &": {
  //     marginTop: theme.spacing.unit * 3
  //   }
  // },
  // bootstrapInput: {
  //   borderRadius: 4,
  //   backgroundColor: theme.palette.common.white,
  //   border: "1px solid #ced4da",
  //   fontSize: 16,
  //   padding: "10px 12px",
  //   width: "calc(100% - 24px)",
  //   transition: theme.transitions.create(["border-color", "box-shadow"]),
  //   fontFamily: [
  //     "-apple-system",
  //     "BlinkMacSystemFont",
  //     '"Segoe UI"',
  //     "Roboto",
  //     '"Helvetica Neue"',
  //     "Arial",
  //     "sans-serif",
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"'
  //   ].join(","),
  //   "&:focus": {
  //     borderColor: "#80bdff",
  //     boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
  //   }
  // },
  // bootstrapFormLabel: {
  //   fontSize: 18
  // }
});

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

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

              <form className={classes.container} noValidate autoComplete="off">
                <MuiThemeProvider theme={theme}>
                  <TextField
                    id="search"
                    label="Поиск"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  {/* <TextField
                    defaultValue="react-bootstrap"
                    label="Bootstrap"
                    id="bootstrap-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                      classes: {
                        root: classes.bootstrapRoot,
                        input: classes.bootstrapInput
                      }
                    }}
                    InputLabelProps={{
                      shrink: true,
                      className: classes.bootstrapFormLabel
                    }}
                  /> */}
                </MuiThemeProvider>
              </form>

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
