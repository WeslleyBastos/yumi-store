import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"
import { ConfigProvider } from "antd";
import ptBr from "antd/lib/locale/pt_BR"
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Provider from "./providers"
import Providers from "./providers/index";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
    <BrowserRouter>
      <ConfigProvider locale={ptBr}>
        <Provider>
          <App />
        </Provider>
      </ConfigProvider>  
    </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
