import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyleProvider } from '@ant-design/cssinjs';
import './antd.min.css';
import { ConfigProvider } from 'antd';

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ hashed: false }}>
    <App />
    </ConfigProvider>
  </React.StrictMode>
);

// import React from 'react';
// import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
// import type Entity from '@ant-design/cssinjs/es/Cache';
// import { renderToString } from 'react-dom/server';
// import App from "./App";

// const Index = () => {
//   // SSR Render
//   const cache = React.useMemo<Entity>(() => createCache(), []);
//   const html = renderToString(
//     <StyleProvider cache={cache}>
//       <App />
//     </StyleProvider>,
//   );

//   // Grab style from cache
//   const styleText = extractStyle(cache);

//   // Mix with style
//   return `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         ${styleText}
//       </head>
//       <body>
//         <div id="root">${html}</div>
//       </body>
//     </html>
//   `;
// };

// export default Index;