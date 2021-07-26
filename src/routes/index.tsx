import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "../pages/Products";
import Categories from "../pages/Categories";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/categories" component={Categories} />
      </Switch>
    </BrowserRouter>
  );
}
