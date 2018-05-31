import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../../css/Tables.css';

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true
};

class AssignedProjects extends Component {
  render() {
    return (

      <BootstrapTable data={this.props.data}  bordered={ false } selectRow={ selectRowProp } search hover className="theader-hidden custom-tbody">
        <TableHeaderColumn dataField='project' isKey>Project</TableHeaderColumn>
      </BootstrapTable>

    );
  }
}

export default AssignedProjects;
