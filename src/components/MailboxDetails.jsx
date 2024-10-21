import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({mailboxes}) => {
  const { mailboxId } = useParams();

  const box = mailboxes.find((mailbox)=>{
    return mailbox.id === Number(mailboxId)
  });

  if (!box){
    return <p>Mailbox not found!</p>
  }

  return (
    <div>
      <h1>Mailbox {mailboxId} Details</h1>
      <p>Boxholder: {box.boxholder}</p>
      <p>Box Size: {box.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
