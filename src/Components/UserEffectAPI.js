import React, { useState, useEffect } from "react";

const UserEffectAPI = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  const getUsers = () => {
    const response = fetch("https://admin.naxa.com.np/api/services?format=json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUsers(data);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="section-details">
      <div className="container">
        {users.map((curElemet, index) => {
          const classname = "susant";
          const classnames = "dipson";
          return (
            <>
              <div className="grid-icon" id={classname + index.toString()}>
                <img src={curElemet.photo} alt="" className="grid-icons-img" />
              </div>
              <div className="grid-content" id={classnames + index.toString()}>
                <img
                  src={curElemet.icon}
                  alt=""
                  className="grid-content-icon"
                />
                <h2 className="secondary-heading">{curElemet.title}</h2>
                <p className="description--1">
                  {curElemet.description1.slice(3, -4)}
                </p>

                <div className="grid-content-paragraph-box">
                  <div className="paragraph-box-2">
                    <p className="grid-content-paragraph">
                      {curElemet.description2
                        .replace("<p>", "")
                        .replace("<p>", "")
                        .replace("</p>", "")
                        .replace("</p>", "")}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default UserEffectAPI;
