import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn  } from 'react-bootstrap-table';

import '../../css/Tables.css';

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true
};

const projectTypeFilter = {
  'Project 1': 'Projekttyp 1',
  'Project 2': 'Projekttyp 2',
  'Project 3': 'Projekttyp 3'
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

class Projects extends Component {
  render() {
    return (
      <BootstrapTable data={this.props.data} selectRow={ selectRowProp } bordered={ false } search hover className="custom-tbody">
        <TableHeaderColumn dataField='project' isKey>Projects</TableHeaderColumn>
        <TableHeaderColumn dataField='projectType' filterFormatted dataFormat={ enumFormatter } formatExtraData={ projectTypeFilter }
          filter={ { type: 'SelectFilter', options: projectTypeFilter, selectText: 'Choose project type' } }> </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Projects;
