import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({addMailBox}) => {

    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const navigate = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();
        if (name && size) {
            addMailBox({boxholder: name, boxSize: size});
            setName('');
            setSize('small');
            navigate('/mailboxes')
        }
    }

    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleSizeInput = (e) => {
        setSize(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Enter a Box Holder:</label>
            <input id='name' type='text' onChange={handleNameInput} value={name}></input>
            <label htmlFor='size'>Choose a Box Size:</label>
            <select id='size' name='size' onChange={handleSizeInput} value={size}>
                <option value="" disabled>Select a mailbox</option>
                <option value="big">Big</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default MailboxForm;