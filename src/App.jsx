import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import Outlets from './pages/Outlets';
// import BulkOrder from './pages/BulkOrder';
// import BookTable from './pages/BookTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layot from './pages/Layout';


function App() {
  return (
    <div>
     <Layot/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/outlets" element={<Outlets />} />
        <Route path="/bulk-order" element={<BulkOrder />} />
        <Route path="/book-table" element={<BookTable />} />
      </Routes> */}
    </div>
  );
}

export default App;
