import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './CampusMenu.css';
import SearchPage from './SearchPage';
import Button from './Button';

class CampusMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UTM: false,
      UTSG: false,
      UTSC: false
    }
  }

  handleMouseOver = (campus) => {
    this.setState({[campus]: true})
  }

  handleMouseLeave = (campus) => {
    this.setState({[campus]: false})
  }

  render() {
    return (
      <Router>
        <div className="panel">
          <Button 
            to="/search/UTM"
            label={"UTM"} 
            image={"./img/utm.jpg"} 
            onMouseOver={() => this.handleMouseOver("UTM")}
            onMouseLeave={() => this.handleMouseLeave("UTM")}
            hover={this.state.UTM} 
          />
          <Button 
            to="/search/UTSG"
            label={"UTSG"} 
            image={"./img/utsg.jpg"} 
            onMouseOver={() => this.handleMouseOver("UTSG")}
            onMouseLeave={() => this.handleMouseLeave("UTSG")}
            hover={this.state.UTSG}
          />
          <Button 
            to="/search/UTSC"
            label={"UTSC"} 
            image={"./img/utsc.jpg"} 
            onMouseOver={() => this.handleMouseOver("UTSC")}
            onMouseLeave={() => this.handleMouseLeave("UTSC")}
            hover={this.state.UTSC}
          />
        </div>
        <div>
          <Switch>
            <Route exact path="/search/UTM">
              <SearchPage campus="UTM" />
            </Route>
            <Route exact path="/search/UTSG">
              <SearchPage campus="UTSG" />
            </Route>
            <Route exact path="/search/UTSC">
              <SearchPage campus="UTSC" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default CampusMenu;
