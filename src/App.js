import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import StepperBar from "./components/StepperBar";
import ShopView from "./screens/ShopView";
import PaymentView from "./screens/PaymentView";
import NotFound from "./screens/NotFound";
import CartView from "./screens/CartView";
import CompleteView from "./screens/CompleteView";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="AppWrapper">
          <StepperBar className="StepperBar" />
          <Switch>
            <Route exact path="/" component={ShopView} />
            <Route path="/cart" component={CartView} />
            <Route path="/payment" component={PaymentView} />
            <Route path="/complete" component={CompleteView} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
