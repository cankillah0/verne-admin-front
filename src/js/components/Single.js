import React, { Component } from 'react';

import Container from 'muicss/lib/react/container';
import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import Panel from 'muicss/lib/react/panel';
import Checkbox from 'muicss/lib/react/checkbox';
import Button from 'muicss/lib/react/button';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

import Accounts from './Accounts.js';
import Projects from './Projects.js';
import AssignedAccounts from './AssignedAccounts.js';
import AssignedProjects from './AssignedProjects.js';
import Visualization from "./Visualization.js";

import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/Single.css';

var accountData = [
  {account: 'Account 1', accountType: 'Accounttyp'},
  {account: 'Account 2', accountType: 'Accounttyp'},
  {account: 'Account 3', accountType: 'Accounttyp'},
  {account: 'Account 4', accountType: 'Accounttyp'},
  {account: 'Account 5', accountType: 'Accounttyp'},
  {account: 'Account 6', accountType: 'Accounttyp'},
  {account: 'Account 7', accountType: 'Accounttyp'},
  {account: 'Account 8', accountType: 'Accounttyp'},
  {account: 'Account 9', accountType: 'Accounttyp'},
  {account: 'Account 10', accountType: 'Accounttyp'},
  {account: 'Account 11', accountType: 'Accounttyp'},
  {account: 'Account 12', accountType: 'Accounttyp'},
  {account: 'Account 13', accountType: 'Accounttyp'}
];

var projectData = [
  {project: 'Project 1', projectType: 'Projekttyp 1'},
  {project: 'Project 2', projectType: 'Projekttyp 2'},
  {project: 'Project 3', projectType: 'Projekttyp 3'},
  {project: 'Project 4', projectType: 'Projekttyp 2'},
  {project: 'Project 5', projectType: 'Projekttyp 2'},
  {project: 'Project 6', projectType: 'Projekttyp 3'},
  {project: 'Project 7', projectType: 'Projekttyp 1'},
  {project: 'Project 8', projectType: 'Projekttyp 1'}
];

var assignedAccountData = [
  {account: 'Account 4'},
  {account: 'Account 5'},
  {account: 'Account 6'},
  {account: 'Account 7'},
  {account: 'Account 8'}
];

var assignedProjectData = [
  {project: 'Project 4'},
  {project: 'Project 5'},
  {project: 'Project 6'},
  {project: 'Project 7'},
  {project: 'Project 8'}
];


class Single extends Component {
  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row>
            <Col md="1"></Col>
            <Col md="3">
              <Form inline={true} className="with-margin-bottom">
                <Input placeholder="Name"/>
                <Button variant="raised" color="primary" type="submit" id="save-btn">Save</Button>
              </Form>
            </Col>
            <Col md="4"></Col>
            <Col md="3">
              <Form>
                <Select defaultValue="option-1">
                  <Option value="option-1" label="Löschfrist Audittrail" />
                  <Option value="option-2" label="3 Monate" />
                  <Option value="option-3" label="4 Monate" />
                  <Option value="option-4" label="6 Monate" />
                </Select>
              </Form>
            </Col>
            <Col md="1"></Col>
          </Row>


          <Col md="1"></Col>
          <Col md="3">
            <Panel className="panel-no-padding sm-min-height">
              <Tabs  defaultSelectedIndex={1} justified={true}>
                <Tab value="pane-1" label="Accounts" >
                <Form>
                  <div className="scroll-panel">
                    <Accounts data= {accountData} />
                  </div>
                  <div className="btn-div">
                    <Checkbox name="input" label="Show all" className="pull-left"/>
                    <Button variant="flat" className="pull-right" type="submit">Preview</Button>
                  </div>
                </Form>
                </Tab>
              </Tabs>
            </Panel>
            <Panel className="panel-no-padding sm-min-height">
              <Tabs  defaultSelectedIndex={1} justified={true}>
                <Tab value="pane-1" label="Projects">
                <Form>
                  <div className="scroll-panel">
                    <Projects data={projectData} />
                  </div>
                  <div className="btn-div">
                    <Checkbox name="input" label="Show all" className="pull-left"/>
                    <Button variant="flat" className="pull-right" type="submit">Preview</Button>
                  </div>
                </Form>
                </Tab>
              </Tabs>
            </Panel>
          </Col>

          <Col md="4">
            <Panel className="panel-no-padding panel-special lg-min-height">
              <Tabs  defaultSelectedIndex={1} justified={true}>
                <Tab value="pane-1" label="Preview">
                  <Form>
                  <Visualization/>
                  </Form>
                </Tab>
              </Tabs>
            </Panel>
          </Col>

          <Col md="3">
            <Panel className="panel-no-padding panel-special sm-min-height">
              <Tabs  defaultSelectedIndex={1} justified={true}>
                <Tab value="pane-1" label="Assigned Accounts" >
                <Form>
                  <div className="scroll-panel">
                    <AssignedAccounts data= {assignedAccountData} />
                  </div>
                  <div className="btn-div">
                    <Button variant="flat" color="danger" className="pull-left" type="submit">Delete</Button>
                    <Button variant="flat" className="pull-right" type="submit">Preview</Button>
                  </div>
                </Form>
                </Tab>
              </Tabs>
            </Panel>
            <Panel className="panel-no-padding panel-special sm-min-height">
              <Tabs  defaultSelectedIndex={1} justified={true}>
                <Tab value="pane-1" label="Assigned Projects">
                <Form>
                  <div className="scroll-panel">
                    <AssignedProjects data = {assignedProjectData} />
                  </div>
                  <div className="btn-div">
                    <Button variant="flat" color="danger" className="pull-left" type="submit">Delete</Button>
                    <Button variant="flat" className="pull-right" type="submit">Preview</Button>
                  </div>
                </Form>
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

export default Single;
