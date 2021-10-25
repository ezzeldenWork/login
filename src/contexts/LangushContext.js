import React, {Component, createContext} from "react";

export const LanguageContext = createContext();

export class LanguageProveder extends Component {
  constructor(props) {
    super(props);
    this.state = {language: "spanish"};
    this.chengeLanguash = this.chengeLanguash.bind(this);
  }

  chengeLanguash(e) {
    this.setState({language: e.target.value});
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{...this.state, chengeLanguash: this.chengeLanguash}}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}



export const withLanguageContext = Component => props => {
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
}