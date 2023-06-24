import React, { useState } from "react";
const Data = () => {
  const data = [
    {
      id: 1,

      ism: "Akmal",
      familya: "Diyorov",
    },
    {
      id: 2,

      ism: "Alisher",
      familya: "Bobomurodov",
    },
    {
      id: 3,
      ism: "Jafarxon",
      familya: "Saidumarov",
    },
    {
      id: 4,
      ism: "Azim",
      familya: "Narzuaxsdfllayev",
    },
    {
      id: 5,
      ism: "Azim",
      familya: "Narzullayev",
    },
    {
      id: 6,
      ism: "Jafarxon",
      familya: "Saidumarov",
    },
    {
      id: 7,

      ism: "Alisher",
      familya: "Bobomurodov",
    },
    {
      id: 8,
      ism: "Akmal",
      familya: "Diyorov",
    },
  ];

  const States = data.reduce(
    (props, item) => {
      props.familya[item.id] = item.familya;
      props.ism[item.id] = item.ism;
      props.ids.push(item.id);
      props.textContent[item.id] = "Kelmadi";
      return props;
    },
    { familya: {}, ism: {}, ids: [], textContent: {} }
  );

  const [familya, setFamilya] = useState(States.familya);
  const [ism, setIsm] = useState(States.ism);
  const [ids, setIds] = useState(States.ids);
  const [textContent, setTextContent] = useState(States.textContent);

  const handleClick = (id) => {
    setTextContent((prevTextContent) => {
      return {
        ...prevTextContent,
        [id]: "Keldi",
      };
    });
    console.log("ID:", id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = 1121426146;
    const bot = "6229717040:AAH25e0ViIbOVvb0njOkVVElFf_H7Ol3lGA";

    let message = "";

    const currentDate = new Date().toLocaleString();
    message += "Fan: " + "English" + "\n\n";
    ids.forEach((id) => {
      message += "ID: " + id + "\n";
      message += "Familya: " + familya[id] + "\n";
      message += "Ism: " + ism[id] + "\n";
      message += "Darstga: " + textContent[id] + "\n\n";
    });
    message += "Bugungi sana: " + currentDate + "\n";

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
      .then((data) => {
        console.log(data);
        setTextContent(States.textContent);
      });
  };

  return (
    <div>
      {data.map((item) => (
        <div className="res-con" key={item.id}>
          <p className="pe">
            <p className="p">{item.id}</p>
          </p>
          <p className="pe1">
            <p className="p1">
              {" "}
              <span className="span">First Name:</span>
              {item.ism}
            </p>
          </p>
          <p className="pe2">
            <p className="p2">
              {" "}
              <span className="span">Last Name:</span>
              {item.familya}
            </p>
          </p>
          <div className="kel">
            <button onClick={() => handleClick(item.id)}>
              {textContent[item.id]}
            </button>
          </div>
        </div>
      ))}
      <button onClick={handleSubmit} className="bos">
        Yuborish
      </button>
    </div>
  );
};

export default Data;
