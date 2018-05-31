import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn  } from 'react-bootstrap-table';

import Container from 'muicss/lib/react/container';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Button from 'muicss/lib/react/button';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import '../../css/Overview.css';



class Overview extends Component {

  onChange(i, value, tab, ev) {
    console.log(arguments);
  }

  onActive(tab) {
    console.log(arguments);
  }

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Col md="1"></Col>
          <Col md="10">
          <Panel className="panel-no-padding">
            <Tabs onChange={this.onChange} defaultSelectedIndex={3} justified={true} className="overview-tabsbar">

              <Tab value="pane-1" label="Global customers" onActive={this.onActive}>
                <Button color="primary" className="add-btn">Add global customer</Button>
                <BootstrapTable hover ref='table' data={this.props.data} multiColumnSort={ 2 } pagination={ true } search={ true }>
                    <TableHeaderColumn dataField='name' isKey={ true } dataSort={ true }>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='accounts' dataSort={ true }>Accounts</TableHeaderColumn>
                    <TableHeaderColumn dataField='projects' dataSort={ true }>Projects</TableHeaderColumn>
                    <TableHeaderColumn dataField='edit'>Edit</TableHeaderColumn>
                </BootstrapTable>
              </Tab>

              <Tab value="pane-2" label="Accounts">
              <Button color="primary" className="add-btn">Add global customer</Button>
                <BootstrapTable hover ref='table' data={this.props.data} multiColumnSort={ 2 } pagination={ true } search={ true }>
                  <TableHeaderColumn dataField='accounts' dataSort={ true }>Accounts</TableHeaderColumn>
                  <TableHeaderColumn dataField='name' isKey={ true } dataSort={ true }>Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='projects' dataSort={ true }>Projects</TableHeaderColumn>
                  <TableHeaderColumn dataField='edit'>Edit</TableHeaderColumn>
                </BootstrapTable>
              </Tab>

              <Tab value="pane-3" label="Projects">
              <Button color="primary" className="add-btn">Add global customer</Button>
                <BootstrapTable hover ref='table' data={this.props.data} multiColumnSort={ 2 } pagination={ true } search={ true }>
                  <TableHeaderColumn dataField='projects' dataSort={ true }>Projects</TableHeaderColumn>
                  <TableHeaderColumn dataField='accounts' dataSort={ true }>Accounts</TableHeaderColumn>
                  <TableHeaderColumn dataField='name' isKey={ true } dataSort={ true }>Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='edit'>Edit</TableHeaderColumn>
                </BootstrapTable>
              </Tab>
            </Tabs>
          </Panel>
          </Col>
          <Col md="1"></Col>
        </Container>
      </div>
    );
  }
}

export default Overview;
