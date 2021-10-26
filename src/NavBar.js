import React, {useContext} from "react";
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
import styles from "./styles/NavBarStyles";
import {ThemeContext} from "./contexts/ThemeContext";
import {LanguageContext} from "./contexts/LangushContext";

const content = {
  english: {
    search: "Search",
    flag: "🔅",
    todoLable: "Todo App",
  },
  french: {
    search: "Chercher",
    flag: "🎡",
    todoLable: "Application à faire",
  },
  spanish: {
    search: "Buscar",
    flag: "🎋",
    todoLable: "Aplicación Todo",
  },
};
function NavBar(props) {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {classes} = props;
  const {search, flag, todoLable} = content[language];
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <spna>{flag}</spna>
          </IconButton>
          <Typography className={classes.tittle} variant="h6" color="inherit">
            {todoLable}
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow}></div>
          <div className={classes.search}>
            <InputBase
              placeholder={search}
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

export default withStyles(styles)(NavBar);
