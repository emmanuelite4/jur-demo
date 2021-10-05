import "./App.css";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./redux/store";

import "antd/dist/antd.css";
import ActionCableClient from "./ActionCableClient";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ActionCableClient />
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
