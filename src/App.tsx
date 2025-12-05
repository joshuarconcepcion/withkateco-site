import { type JSX } from 'react';
import Homepage from './pages/Homepage';
import About from './pages/About';
import RootLayout from './layout/RootLayout';
import { Route, Routes } from 'react-router';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path = '/' element={<RootLayout />}> 
        <Route index element={<Homepage />} />
        <Route path = '/about' element={<About />} />
      </Route>
    </Routes>
  )
}


