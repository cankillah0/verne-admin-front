import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn  } from 'react-bootstrap-table';

import '../../css/Tables.css';

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true
};

const accountTypeFilter = {
  'Account 1': 'Accounttyp 1',
  'Account 2': 'Accounttyp 2',
  'Account 3': 'Accounttyp 3'
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

class Accounts extends Component {
  render() {
    return (
      <BootstrapTable data={this.props.data} selectRow={ selectRowProp } bordered={ false } search hover className="custom-tbody">
        <TableHeaderColumn dataField='account' isKey>Projects</TableHeaderColumn>
        <TableHeaderColumn dataField='accountType' filterFormatted dataFormat={ enumFormatter } formatExtraData={ accountTypeFilter }
          filter={ { type: 'SelectFilter', options: accountTypeFilter, selectText: 'Choose account type' } }> </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Accounts;
