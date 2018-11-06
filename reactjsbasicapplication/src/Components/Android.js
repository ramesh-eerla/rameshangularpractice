import React, { Component } from 'react';
import Versions from './Versions';


class Android extends Component {
  render() {
    let version_list;
    if(this.props.versions){
      version_list=this.props.versions.map( versionitem  => {
        return (<Versions key={versionitem.name}   version={versionitem}></Versions>);
      });
    }
    console.log(this.props);
    return (
      <div className="Android">
        Android Version list 2018 <br />
        <h2>Android versions and its api level</h2>
        {version_list}
      </div>
    );
  }
}

export default Android;
