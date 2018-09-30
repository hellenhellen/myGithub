import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col ,Form, Input, DatePicker, } from 'antd';
class App extends Component {
  constructor(props){
    super(props);
  }
  handleClick(i){
    alert(1);
  }
  render() {
      const FormItem = Form.Item;

      const formItemLayout = {
          labelCol: {
              xs: { span: 24 },
              sm: { span: 5 },
          },
          wrapperCol: {
              xs: { span: 24 },
              sm: { span: 12 },
          },
      };
      const formItemLayout1 = {
          labelCol: {
              span: 4
          },
          wrapperCol: {
              span: 14
          },
      };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="button" onClick={this.handleClick}/>
          <div>
              <p>sub-element align left</p>
              <Row type="flex" justify="space-around">
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
                  <Col span={4}>col-4</Col>
              </Row>
              <Form>
                  <FormItem
                      {...formItemLayout}
                      label="Fail"
                      validateStatus="error"
                      help="Should be combination of numbers & alphabets"
                  >
                      <Input placeholder="unavailable choice" id="error" />
                  </FormItem>

                  <FormItem
                      {...formItemLayout}
                      label="Warning"
                      validateStatus="warning"
                  >
                      <Input placeholder="Warning" id="warning" />
                  </FormItem>

                  <FormItem
                      {...formItemLayout}
                      label="Validating"
                      hasFeedback
                      validateStatus="validating"
                      help="The information is being validated..."
                  >
                      <Input placeholder="I'm the content is being validated" id="validating" />
                  </FormItem>

                  <FormItem
                      {...formItemLayout}
                      label="Success"
                      hasFeedback
                      validateStatus="success"
                  >
                      <Input placeholder="I'm the content" id="success" />
                  </FormItem>

                  <FormItem
                      {...formItemLayout}
                      label="Warning"
                      hasFeedback
                      validateStatus="warning"
                  >
                      <Input placeholder="Warning" id="warning" />
                  </FormItem>

                  <FormItem
                      {...formItemLayout}
                      label="Fail"
                      hasFeedback
                      validateStatus="error"
                      help="Should be combination of numbers & alphabets"
                  >
                      <Input placeholder="unavailable choice" id="error" />
                  </FormItem>

                  <FormItem
                      label="inline"
                      labelCol={{
                          xs: { span: 24 },
                          sm: { span: 5 },
                      }}
                      wrapperCol={{
                          xs: { span: 24 },
                          sm: { span: 19 },
                      }}
                      help
                  >
                      <Col span={6}>
                          <FormItem validateStatus="error" help="Please select the correct date">
                              <DatePicker />
                          </FormItem>
                      </Col>
                      <Col span={1}>
                          <p className="ant-form-split">-</p>
                      </Col>
                      <Col span={6}>
                          <FormItem>
                              <DatePicker />
                          </FormItem>
                      </Col>
                  </FormItem>
              </Form>
          </div>
      </div>
    );
  }
}

export default App;
