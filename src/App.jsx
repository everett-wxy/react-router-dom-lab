import React from "react";
import Navbar from "./components/Navbar";
import { Route,Routes,Navigate } from 'react-router-dom';
import { useState } from "react";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";

function App() {
// const [mailboxes, setMailboxes] = useState([]);

// function addBox(){}


  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}></Route>
        <Route path='/mailboxes' element={<MailboxList />}></Route>
        <Route path='/new-mailbox' element={<MailboxForm />}></Route>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
