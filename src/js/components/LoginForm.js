import React, { Component } from 'react';
import LoadingSpinner from './../components/LoadingSpinner';

import Container from 'muicss/lib/react/container';
import Panel from 'muicss/lib/react/panel';
import Checkbox from 'muicss/lib/react/checkbox';
import Button from 'muicss/lib/react/button';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Col from 'muicss/lib/react/col';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

import '../../css/Login.css';



class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginDataSent : false,
            loginProcessed : false
        };
    }

  render() {
        if (this.state.loginProcessed){
            return null;
        } else {
            return (
                <div>
                    <Container>
                        <Col md="4"></Col>
                        <Col md="4">
                            <Panel className="panel-no-padding panel-special">
                                <Tabs defaultSelectedIndex={1} justified={true}>
                                    <Tab value="pane-1" label="Login">
                                        <Form className="login-container" >
                                            { !this.state.loginDataSent ? <Input label="Email" type="email" floatingLabel={true} required={true}/> : null }
                                            { !this.state.loginDataSent ? <Input label="Password" type="password" floatingLabel={true} required={true} /> : null }
                                            { !this.state.loginDataSent ? <a href="" className="label-size">Forgot password?</a> : null }
                                            { !this.state.loginDataSent ? <Checkbox name="input" label="Remember me" className="label-size"/> : null }
                                            { !this.state.loginDataSent ? <Button color="primary" className="pull-right" onClick={this.onLoginButtonClick.bind(this)}>Login</Button> : null }
                                        </Form>
                                    </Tab>
                                </Tabs>
                                { this.state.loginDataSent ? <LoadingSpinner/> : null }
                            </Panel>

                        </Col>
                        <Col md="4"></Col>
                    </Container>
                </div>
            );
        }
  }

  onLoginButtonClick(){
    this.setState( {loginDataSent : true} )
    setTimeout(this.onFakeLoginComplete.bind(this), 1500); //it's temporary, while we dont have implemented API
  }

  onFakeLoginComplete(){
    this.setState ( {loginProcessed : true} )
    this.props.onLoginSucceeded.call(this);
  }
}

export default LoginForm;
