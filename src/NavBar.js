import React, {Component} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// import {withStyles} from "@material-ui/styles";
import styles from "./styles/NavBarStyles";
import {ThemeContext} from "./contexts/ThemeContext";

class NavBar extends Component {
  static contextType = ThemeContext;
  render() {
    const {isDarkMode, toggleTheme} = this.context;
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <spna>🎅</spna>
            </IconButton>
            <Typography className={classes.tittle} variant="h6" color="inherit">
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow}></div>
            <div className={classes.search}>
              <InputBase
                placeholder="Search ...."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
