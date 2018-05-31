import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import '../../css/Tables.css';


const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true
};


class AssignedAccounts extends Component {
  render() {
    return (

      <BootstrapTable data={this.props.data}  bordered={ false } selectRow={ selectRowProp } search hover className="theader-hidden custom-tbody">
        <TableHeaderColumn dataField='account'  isKey>Account</TableHeaderColumn>
      </BootstrapTable>

    );
  }
}

export default AssignedAccounts;
