import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Layout } from "antd";
import RoHeader from "./RoHeader";
import RoFooter from "./RoFooter";
import Dashboard from "./admin/Dashboard";
import FixedHeader from "./FixedHeader";

const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <div>
          <BrowserRouter>
            <div>
              <FixedHeader />
              <Route path="/admin" component={RoHeader} />
              <Route exact path="/" component={Landing} />
              <Route path="/admin" component={Dashboard} />
              <RoFooter />
            </div>
          </BrowserRouter>
        </div>
      </Layout>
    );
  }
}

export default connect(null, actions)(App);
