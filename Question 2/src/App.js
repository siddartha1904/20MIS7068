import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList.js";
import ProductDetails from "./components/ProductDetails.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/products/:productId" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
