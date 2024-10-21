import React from "react";
import { Link } from "react-router-dom";


const MailboxList = ({ mailboxes }) => {
  return (
    <ul>
      {mailboxes.map((mailbox) => {
        return (
          <li className="mail-box" key={mailbox.id}>
            <Link to ={`/mailboxes/${mailbox.id}`}>Mailbox #{mailbox.id}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MailboxList;
