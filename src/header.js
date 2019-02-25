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
                  <button id="airports-menu-lower-left" className="mdl-button mdl-js-button">
                    Airports
                  </button>
                  <button id="train-menu-lower-left" className="mdl-button mdl-js-button mdl-color-text--black">
                    Train Systems
                  </button>
                  <button id="rail-menu-lower-left" className="mdl-button mdl-js-button">
                    Rail Systems
                  </button>
                  <button id="bus-menu-lower-left" className="mdl-button mdl-js-button">
                    Bus Systems
                  </button>
                  <button id="trolley-menu-lower-left" className="mdl-button mdl-js-button">
                    Trolley Systems
                  </button>
                  <button id="weather-menu-lower-left" className="mdl-button mdl-js-button">
                    Weather Data
                  </button>
              </nav>
          </div>
          </header>

            );
          }
  }

export default Header;
