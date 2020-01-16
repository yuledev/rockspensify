import React, { Component } from "react";
import { Icon, Menu } from "antd";
import { withRouter } from "react-router";

class RoMenu extends Component {
  state = {
    current: "dashboard"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
    this.props.history.push(`/admin/${e.key}`);
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="dashboard">
            <Icon type="dashboard" />
            Dashboard
          </Menu.Item>
          <Menu.Item key="categories">
            <Icon type="appstore" />
            Categorie
          </Menu.Item>
          <Menu.Item key="expenses">
            <Icon type="euro" />
            Spese
          </Menu.Item>
          <Menu.Item key="reports">
            <Icon type="file-pdf" />
            Reports
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(RoMenu);
