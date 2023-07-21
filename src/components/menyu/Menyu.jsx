import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import "./menyu.css";
import eng from "../../assets/en.png";
import cap from "../../assets/cap.svg";
import tarix from "../../assets/tarix.png";
import it from "../../assets/it.png";
import mat from "../../assets/ed.png";

const Menyu = () => {
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

  const cansel = () => {
    setOpen(false);
    setModal(false);
  };
  
  const [isactiv , setIsactiv] = useState(false)
  const [isactiv1 , setIsactiv1] = useState(false)

  const  bar1 = () => {
setIsactiv(!isactiv)
setIsactiv1(!isactiv1)

  }



  const [colors, setColors] = useState();
  const [colors1, setColors1] = useState();
  const [colors2, setColors2] = useState();
  const [colors3, setColors3] = useState();
  const inputref = useRef(null);
  const click = (e) => {
    e.preventDefault();
    reset();
  };
  const reset = () => {
    if (inputref.current) {
      inputref.current.value = "";
    }
  };
  return (
    <div>
      <nav>
        <div className="modal">
          <div className={`bar1 ${isactiv? 'active' : ''}`} onClick={bar1}>
            <div className="barr" style={{ transition: ".4s" }}></div>
            <div className="barr" style={{ transition: ".2s" }}></div>
            <div className="barr" style={{ transition: ".4s" }}></div>
          </div>
          <Link className="a" to="/">
            {" "}
            <div
              className="dum"
              onClick={() =>
                setColors3("") ||
                setColors1("") ||
                setColors("") ||
                setColors2("")
              }
            >
              <img src={cap} alt="" className="ca" />
            </div>
          </Link>
          <Link className="a" to="/">
            <h2
              onClick={() =>
                setColors3("") ||
                setColors1("") ||
                setColors("") ||
                setColors2("")

              }
            >
              <i>Forms</i>
            </h2>
          </Link>
          <button onClick={openModal} className="add">
            <i> Add New</i>
          </button>
          <form>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              className="search"
              ref={inputref}
            />
            <i class="fa-solid fa-magnifying-glass" id="i"></i>
            <button
              type="submit"
              onClick={click}
              style={{ display: "none" }}
            ></button>
          </form>
        </div>
        <div className="border"></div>
      </nav>

      <div className="wrapper">
        <div className={`bar ${isactiv1 ? "active" :''}`}>
          <Link className="a" to="/tarix">
            <div
              className="fan"
              onClick={() =>
                setColors3("#212632") ||
                setColors1("") ||
                setColors("") ||
                setColors2("") ||
                setIsactiv(!isactiv)||
                setIsactiv1(!isactiv1)    }
              style={{ backgroundColor: colors3 }}
            >
              <img src={tarix} alt="" /> Tarix{" "}
            </div>
          </Link>
          <Link className="a" to="/english">
            <div
              className="english"
              onClick={() =>
                setColors("#212632") ||
                setColors1("") ||
                setColors2("") ||
                setColors3("#1A202C")||
                setIsactiv(!isactiv)||
                setIsactiv1(!isactiv1)
              }
              style={{ backgroundColor: colors }}
            >
              <img src={eng} alt="" /> English
            </div>
          </Link>
          <Link className="a" to="/matematika">
            <div
              className="mate"
              onClick={() =>
                setColors1("#212632") ||
                setColors("") ||
                setColors2("") ||
                setColors3("#1A202C")||
                setIsactiv(!isactiv)||
                setIsactiv1(!isactiv1)
              }
              style={{ backgroundColor: colors1 }}
            >
              <img src={mat} alt="" /> Matematika
            </div>
          </Link>
          <Link className="a" to="/IT">
            <div
              className="it"
              onClick={() =>
                setColors2("#212632") ||
                setColors1("") ||
                setColors("") ||
                setColors3("#1A202C")||
                setIsactiv(!isactiv)||
                setIsactiv1(!isactiv1)
              }
              style={{ backgroundColor: colors2 }}
            >
              <img src={it} alt="" /> IT dasturlash
            </div>
          </Link>
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

            <Outlet />
            <div className="bush1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menyu;
