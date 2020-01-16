import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "antd";
import RoHeader from "./RoHeader";
import RoFooter from "./RoFooter";
import Dashboard from "./admin/Dashboard";

const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div>
        <BrowserRouter>
          <div>
            <Route path="/admin" component={RoHeader} />
            <Route exact path="/" component={Landing} />
            <Route path="/admin" component={Dashboard} />
            <RoFooter />
          </div>
        </BrowserRouter>
      </div>
    </Layout>
  );
};

export default App;
