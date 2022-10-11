import { Redirect, Route, Switch } from "react-router-dom";
import QuoteDetail from "./components/pages/QuoteDetail";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>

          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
