import React, { Component } from 'react';
import axios from 'axios';

class TrainAPI extends Component {
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
      <div> <h1> Paoli Thorndale </h1>
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp tablesorter" id="RuleTable">
            <thead>
              <tr id="header">
                <th id="Train" style={{textAlign: 'left'}}>Train</th>
                <th id="Local" style={{textAlign: 'left'}}>Service</th>
                <th id="Line" style={{textAlign: 'left'}}>Line</th>
                <th id="Delay" style={{textAlign: 'left'}}>Delay</th>
                <th id="Next Stop" style={{textAlign: 'left'}}>Next Stop</th>
              </tr>
            </thead>
            <tbody>
            {data.map(train => {
                if(train["line"] == "Paoli/Thorndale"){
                  var trainID = train["trainno"];
                  return (
                      <tr style={{display: 'table-row'}} id={trainID} onDoubleClick={() => {this.showAlert()}}>
                        <td>{train["trainno"]}</td>
                        <td>{train["service"]}</td>
                        <td>{train["line"]}</td>
                        <td>{train["late"]} minutes</td>
                        <td>{train["nextstop"]}</td>
                      </tr>
                    );
                }
              })}
            </tbody>
          </table>
          </div>
        );
  }
}

export default TrainAPI;
