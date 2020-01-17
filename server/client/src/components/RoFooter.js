import React, { Component } from "react";
import { connect } from "react-redux";

import { Layout, Button, Row, Col, Typography, Icon } from "antd";
const { Footer } = Layout;
const { Text } = Typography;

class RoFooter extends Component {
  renderContent() {
    console.log(this.props);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <Button
              type="link"
              icon="facebook"
              href="/auth/facebook"
              style={{ float: "right" }}
            >
              Login con Facebook
            </Button>
          </div>
        );
      default:
        return;
    }
  }
  render() {
    return (
      <Footer>
        <hr />
        <Row>
          <Col span={12}>
            <Text>
              Made with <Icon type="heart" theme="filled" /> by wampon
            </Text>
          </Col>
          <Col span={12}>{this.renderContent()}</Col>
        </Row>
      </Footer>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(RoFooter);
