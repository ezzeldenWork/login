import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import {LanguageContext} from "./contexts/LangushContext";

const word = {
  english: {
    email: "Emial",
    signIn: "Sign In ",
    password: "Password",
    rememberMe: "Remember me",
  },
  frensh: {
    email: "Adresse Elctronique",
    signIn: "S'identifier",
    password: "Mot de passe",
    rememberMe: "Souviens-toi de moi",
  },
  spanish: {
    email: "Emial in spanish",
    signIn: "Iniciar sesión",
    password: "Contraseña",
    rememberMe: "Recuérdame",
  },
};

class Form extends Component {
  static contextType = LanguageContext;

  render() {
    const {language, chengeLanguash} = this.context;
    const {classes} = this.props;
    const {email, signIn, password, rememberMe} = word[language];
    return (
      <min className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5"> {signIn} </Typography>
          <Select value={language} onChange={chengeLanguash}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="frensh">Frensh</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>

          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password"></Input>
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={rememberMe}
            />
            <Button variant="contained" type="submit" fullWidth color="primary">
              {signIn}
            </Button>
          </form>
        </Paper>
      </min>
    );
  }
}


export default withStyles(styles)(Form);
