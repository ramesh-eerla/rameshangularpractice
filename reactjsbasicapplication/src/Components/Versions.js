import React, { Component } from 'react';
import '../stylesheets/versionitem.css';

class Versions extends Component {
  render() {
    
    return (
        <div className="Versions">
      <li >
       {this.props.version.name}-{this.props.version.Version}-{this.props.version.releasedate}-{this.props.version.APIlevel}
      </li>
      </div>
    );
  }
}

export default Versions;
