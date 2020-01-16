import React, { Component } from "react";
import { Layout } from "antd";
import "./style.css";

const { Header } = Layout;

class RoHeader extends Component {
  render() {
    return (
      <div>
        <Header className="header">
          <div className="logo" />
        </Header>
      </div>
    );
  }
}

export default RoHeader;
