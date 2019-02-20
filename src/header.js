import React, { Component } from 'react';
import axios from 'axios';
import trainAPI from './trainAPI'

class Header extends Component {
  constructor(){
      super();
      this.state = {
              data: [],
              errors: null
      };
  }

  showAlert(report){
    console.log(report);
  }

  getHeaderData(){
    axios.get('http://www3.septa.org/hackathon/TrainView/')
          .then(res => {
              this.setState({
                  data: res.data
              });
          });
  }

  componentDidMount() {
      this.getHeaderData();
  }

  render() {
          const { isLoading, data } = this.state;
          console.log(data);
          return(
              <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--grey-200">
              <div className="mdl-layout__header-row">
              <span className="mdl-layout-title mdl-layout--large-screen-only" id="title_screen" style={{color: 'black'}}> SEPTA UI - DEV: V2.0.0.0 </span>
                  <nav className="mdl-navigation">
                      <button id="reports-menu-lower-left" className="mdl-button mdl-js-button">
                        Reports
                      </button>
                      <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                          htmlFor="reports-menu-lower-left">
                        <li className="mdl-menu__item" onClick={() => {this.showAlert("")}}>Trains</li>
                        <li className="mdl-menu__item" onClick={() => {this.showAlert("")}}>Subway</li>
                        <li className="mdl-menu__item" onClick={() => {this.showAlert("")}}>Trolley</li>
                        <li className="mdl-menu__item" onClick={() => {this.showAlert("")}}>Buses</li>
                      </ul>

                      <button id="maintenance-menu-lower-left" className="mdl-button mdl-js-button mdl-color-text--black">
                        Maintenance
                      </button>
                      <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                          htmlFor="maintenance-menu-lower-left">
                        <li className="mdl-menu__item" onClick={() => {this.showAlert("")}}>MyView</li>
                        <li className="mdl-menu__item" onClick={() => {this.showAlert("")}}>TransitView</li>
                        <li className="mdl-menu__item" onClick={() => {this.showAlert("")}}>Bus Detours</li>
                        <li className="mdl-menu__item" onClick={() => {this.showAlert("")}}>System Alerts</li>
                        <li className="mdl-menu__item" onClick={() => {this.showAlert("")}}>Elevator Outages</li>
                      </ul>
                  </nav>
              </div>
              </header>
            );
          }
  }

export default Header;
