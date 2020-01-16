import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import RoMenu from "./RoMenu";
import Main from "./pages/Main";
import Categories from "./pages/Categories";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";

const { Content } = Layout;

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Content style={{ padding: "50px 50px" }}>
          <RoMenu />
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Route
                component={({ match }) => (
                  <div>
                    <Route path="/admin/dashboard" component={Main} />
                    <Route path="/admin/categories" component={Categories} />
                    <Route path="/admin/expenses" component={Expenses} />
                    <Route path="/admin/reports" component={Reports} />
                  </div>
                )}
              />
            </Content>
          </Layout>
        </Content>
      </div>
    );
  }
}

export default Dashboard;
