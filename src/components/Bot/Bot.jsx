import React, { useState } from 'react';

function MyForm() {
    const [fullName, setFullName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = 1121426146;
        const bot = "6229717040:AAH25e0ViIbOVvb0njOkVVElFf_H7Ol3lGA";

        let message =
            "Ismi: " + fullName + "\ntel: " + tel + "\nemail: " + email;

        fetch("https://api.telegram.org/bot" + bot + "/sendMessage", {
            method: "POST",
            body: JSON.stringify({
                chat_id: id,
                text: message
            }),
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data));
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="p">Ismi:</p>
            <p className="p">{fullName}</p>
            <p className="p">Tel:</p>
            <p className="p">{tel}</p>
            <p className="p2">Email:</p>
            <p className="p2">{email}</p>
            <button type="submit" className="sub">Submit</button>
        </form>
    );
}

export default MyForm;
