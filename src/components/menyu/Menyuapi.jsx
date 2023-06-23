import React, { useState } from "react";
import "./menyu.css";
const Menyuapi = ({props}) => {
  const { ism, familya } = props;
const data = [
    {
        id: 1,
        ism: "Jafarxon",
        familya: "Saidumarov"

    },
    // {
    //     id: 2,
    //     ism: "Azim",
    //     familya: "Narzullayev"
    // },
    // {
    //     id: 3,
    //     ism: "Akmal",
    //     familya: "Diyorov"
    // },
    // {
    //     id: 4,
    //     ism: "Alisher",
    //     familya: "Bobomurodov"
    // },
    // {
    //     id: 5,
    //     ism: "Nodir",
    //     familya: "Yusupov"
    // },

];


  const handleSubmit = (e) => {
    e.preventDefault();

    const id = 1121426146;
    const bot = "6229717040:AAH25e0ViIbOVvb0njOkVVElFf_H7Ol3lGA";

    let message =
  "Familya: " +familya + "\nIsm: " + ism  + "\ndarstga: " + buttonText;

    fetch("https://api.telegram.org/bot" + bot + "/sendMessage", {
      method: "POST",
      body: JSON.stringify({
        chat_id: id,
        text: message,
      }),
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      setButtonText("Kelmadi")
  };

  const [buttonText, setButtonText] = useState("Kelmadi");

  const handleClick1 = (e) => {
    setButtonText("Keldi");
    console.log(buttonText);
    e.preventDefault();
    document.querySelectorAll('.button').forEach(btn => {
        btn.addEventListener('click', e => {
            e.target.parentNode.classList.toggle('active');
        })
    })
  };


  return (
    <div>
        {
            data.map(itme => (
                <div className="res-con">
                <p className="pe1">
                  <p className="p">{ism}</p>
                </p>
                <p className="pe2">
                  <p className="p1">{familya}</p>
                </p>
                <button onClick={handleClick1} className="button">{buttonText}</button>
              </div>
            ))
        }


      <button onClick={handleSubmit}>sub</button>
    </div>
  );
};

export default Menyuapi;
