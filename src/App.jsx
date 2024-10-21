import React from "react";
import Navbar from "./components/Navbar";
import { Route,Routes,useNavigate } from 'react-router-dom';
import { useState } from "react";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";

function App() {
const [mailboxes, setMailboxes] = useState([]);
const [mailboxID,setMailboxID] = useState(1);

function addMailBox(mailbox){
  setMailboxID(mailboxID+1);
  const newMailBox = {...mailbox, id: mailboxID}
  setMailboxes(prevState => [...prevState, newMailBox]);
  console.log(mailboxes);
}

  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}></Route>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}></Route>
        <Route path='/new-mailbox' element={<MailboxForm  addMailBox ={addMailBox}/>}></Route>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
