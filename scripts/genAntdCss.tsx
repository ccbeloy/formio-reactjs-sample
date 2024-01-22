import fs from 'fs';
import { extractStyle } from '@ant-design/static-style-extract';
import { ConfigProvider } from 'antd';
//import React from 'react';

const outputPath = './src/antd2.min.css';

const css = extractStyle();

// const cssText = extractStyle((node) => (
//     <ConfigProvider theme={{ hashed: false }}>
//       {node}
//     </ConfigProvider>
//   ));

fs.writeFileSync(outputPath, css);