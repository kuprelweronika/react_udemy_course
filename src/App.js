import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
