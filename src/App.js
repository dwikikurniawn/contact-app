import React from 'react';
import './App.css';
import GetContact from './component/GetContacts';
import AddContact from './component/AddContact';
import UpdateContact from './component/UpdateContact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
<BrowserRouter>
<div>
<Routes>
  <Route path="/" element={<GetContact/>}/>
  <Route path="/contacts" element={<GetContact/>}/>
  <Route path="/contacts/add" element={<AddContact/>}/>
  <Route path="/contacts/update/:id" element={<UpdateContact/>}/>
  <Route path="/not-found" element={<NotFound/>}/>
  <Route component={NotFound}/>
</Routes>
</div>
</BrowserRouter>
  );
}

export default App;
