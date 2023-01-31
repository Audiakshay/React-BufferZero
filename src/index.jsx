// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createRoot } from 'react-dom/client';

import Treasure from './app';

import Test from './test';

const container = document.getElementById('root');

const root = createRoot(container);

// const bg = 'red';

// const color = 'white';

// function App() {
//   return (
//     <>
//       <h1 style={{ backgroundColor: bg, color }}>Hi</h1>
//       <h2>Audi</h2>
//     </>
//   );
// }

root.render(
  <>
    <Treasure title="Hi" name={99} />
    <Test />
  </>,
);
