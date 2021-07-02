import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import "./App.scss";
import Layout from "./Layout";
import store from "./store";
import Common from "./containers/Common";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes />
          <Common />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
