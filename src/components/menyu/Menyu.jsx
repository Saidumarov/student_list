import React, { useState, useEffect } from "react";
import "./menyu.css";
import img from "../../assets/oy1.png";
import img1 from "../../assets/quyosh1.png";
import Data from "./Data";

const Menyu = (y) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Names, setNames] = useState([]);
  const [search, setSearch] = useState("");
  const [Open, setOpen] = useState(false);

  useEffect(() => {
    const Names = JSON.parse(localStorage.getItem("names"));
    if (Names) {
      setNames(Names);
    }
    console.log(Names);
  }, []);

  const handle = () => {
    const updated = [...Names, { firstName, lastName }];
    setNames(updated);
    localStorage.setItem("names", JSON.stringify(updated));
    setFirstName("");
    setLastName("");
    setOpen(false);
    setModal(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [modal, setModal] = useState();

  const openModal = () => {
    setOpen(true);
    setModal(true);
  };

  const [Color, setColor] = useState();

  useEffect(() => {
    document.body.style.backgroundColor = Color;
  }, [Color]);

  const handleButtonClick = () => {
    setColor((Color) => (Color === "#171923" ? "#171923" : "#171923"));
    document.querySelector("nav").style.backgroundColor = "";
    document.querySelector(".con").style.backgroundColor = "";
    document.querySelectorAll(".res-con").forEach((e) => {
      e.style.backgroundColor = "";
    });
    document.querySelectorAll(".s").forEach((e) => {
      e.style.color = "";
    });
    document.querySelector(".dum").style.backgroundColor = "";
    document.querySelector("modal , h2").style.color = "";
    document.querySelector(".img").style.zIndex = "-1";
    document.querySelector(".img1").style.zIndex = "1";
  };
  const handleButtonClick1 = () => {
    setColor((Color) => (Color === "white" ? "white" : "white"));
    document.querySelector("nav").style.backgroundColor = "#ebeff1";
    document.querySelector(".con").style.backgroundColor = "#E2E8F0";
    document.querySelectorAll(".res-con").forEach((e) => {
      e.style.backgroundColor = "#F7FAFC";
    });
    document.querySelectorAll(".s").forEach((e) => {
      e.style.color = "#302033";
    });
    document.querySelector("modal , h2").style.color = "#556E8B";
    document.querySelector(".img1").style.zIndex = "-1";
    document.querySelector(".img").style.zIndex = "1";
    document.querySelector(".dum").style.backgroundColor = "rgb(204, 210, 215)";
  };

  // const handleEdit = (index) => {
  //   const editedNames = [...Names];
  //   editedNames[index] = { firstName, lastName };
  //   setNames(editedNames);
  //   localStorage.setItem("names", JSON.stringify(editedNames));
  //   setFirstName("");
  //   setLastName("");
  //   setOpen(true);
  //   setModal(false);
  // };

  // const handleDelete = (index) => {
  //   const updatedNames = Names.filter((_, i) => i ===index);
  //   setNames(updatedNames);
  //   localStorage.setItem("names", JSON.stringify(updatedNames));
  // };

  const filter = Names.filter(
    ({ firstName, lastName }) =>
      firstName.toLowerCase().includes(search.toLowerCase()) ||
      lastName.toLowerCase().includes(search.toLowerCase())
  );

  const cansel = () => {
    setOpen(false);
    setModal(false);
  };

  
  function bar1() {
    const bar = document.querySelector(".bar")
    let bar1 = document.querySelector(".bar1")
    let dis = document.querySelector(".dis")

    bar1.classList.toggle("active")
    bar.classList.toggle("active")
    // dis.classList.toggle("active")

}

  return (
    <div>
      <nav>
        <div className="modal">
          <div className="bar1" onClick={bar1}>
            <div className="barr" style={{ transition: ".4s" }}></div>
            <div className="barr" style={{ transition: ".2s" }}></div>
            <div className="barr" style={{ transition: ".4s" }}></div>
          </div>
          <h2>Forms</h2>
          <button onClick={openModal} className="add">
            Add New
          </button>
          <div>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              className="search"
            />
            <i class="fa-solid fa-magnifying-glass" id="i"></i>
          </div>
          <div className="dum">
            <img
              src={img}
              alt=""
              className="img "
              onClick={handleButtonClick}
            />
            <img
              src={img1}
              alt=""
              className="img1"
              onClick={handleButtonClick1}
            />
          </div>
        </div>
        <div className="border"></div>
      </nav>
      <div className="wrapper">
        <div className="bar">
         <div className="fan">Tarix</div>
         <div className="english">English</div>
         <div className="mate">Matematika</div>
         <div className="it">IT dasturlash</div>
        </div>
        <div className="con">
          {modal && <div className="modall" style={{ display: "block" }}></div>}

          {Open && (
            <div className="modal1">
              <div className="cap">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <button
                onClick={handle}
                disabled={!firstName || !lastName}
                className="sav"
              >
                Save
              </button>
              <button onClick={cansel} className="sav">
                Cancel
              </button>
            </div>
          )}

          <div className="item-con">
            <div className="bush"></div>
            <Data />
            <div className="bush1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menyu;

{
  /* <button className="sub">yubor</button> */
}
{
  /* <Appi /> */
}

{
  /* {filter.map(({ firstName, lastName }, index) => (
            <div key={index} className="res-con">
              <div className="pe">
                <p className="p">
                  {" "}
                  <span className="span">First Name:</span>
                  <span className="s"> {firstName}</span>
                </p>
              </div>
              <div className="pe1">
                {" "}
                <p className="p1">
                  <span className="span">Last Name:</span>
                  <span className="s"> {lastName}</span>
                </p>
              </div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))} */
}

{
  /* <form onClick={handleSubmit}> */
}
// <Data />
{
  /* <button onClick={handleClick1}>{buttonText}</button> */
}

{
  /* </form> */
}