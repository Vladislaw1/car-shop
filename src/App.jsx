import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router';
import { routing } from './routing';

const App = () => <RouterProvider router={routing} />;

export default App;
