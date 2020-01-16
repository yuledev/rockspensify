import React, { Component } from "react";
import { Layout, Button, Row, Col, Typography, Icon } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

class RoFooter extends Component {
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
          <Col span={12}>
            <Button type="link" icon="facebook" style={{ float: "right" }}>
              Login con Facebook
            </Button>
          </Col>
        </Row>
      </Footer>
    );
  }
}

export default RoFooter;
