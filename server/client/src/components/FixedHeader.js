import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Typography, Avatar, Button } from "antd";

const { Text } = Typography;

class FixedHeader extends Component {
  renderHomeButton() {
    return <Button href="/" shape="circle" icon="home" type="primary" />;
  }
  renderContent() {
    console.log(this.props);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <Row
            style={{
              backgroundColor: "#e8e8e8",
              borderBottom: "1px solid #262626"
            }}
          >
            <Col span={8} style={{ padding: "5px" }}>
              <Avatar src={this.props.auth.picture} />
              <Text strong style={{ marginLeft: 16, verticalAlign: "middle" }}>
                Onore a te compagno
                <span style={{ color: "#fa8c16" }}> oltrino </span>
                {this.props.auth.name}
              </Text>
            </Col>
            <Col span={8} style={{ padding: "5px", textAlign: "center" }}>
              {this.renderHomeButton()}
            </Col>
            <Col span={8} style={{ padding: "5px" }}>
              <Button
                type="link"
                icon="logout"
                href="/api/logout"
                style={{ float: "right" }}
              >
                Logout
              </Button>
            </Col>
          </Row>
        );
    }
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(FixedHeader);
