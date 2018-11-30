import React, { Component } from 'react';
import '../stylesheets/versionitem.css';

class Versions extends Component {
  render() {

    return (
        <div className="Versions">
      <table className="table table-bordered" id='tdata'>
        <thead>
      <tr>
        <td>
          <div >
       {this.props.version.name}-{this.props.version.Version}-{this.props.version.releasedate}-{this.props.version.APIlevel}
</div>
       </td>
</tr>
</thead>
      </table>
      </div>
    );
  }
}

export default Versions;
