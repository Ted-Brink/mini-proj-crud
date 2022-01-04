import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Fyll i alla fält!");
    }

    if (checkEmail) {
      return toast.error("E-postadressen finns redan");
    }
    if (checkNumber) {
      return toast.error("Numret finns redan!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Kund tillagd");
    history.push("/");
  };
  console.log(contacts);
  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center">Ny kund</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Namn"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Telefonnummer"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Lägg till kund"
                className="btn btn-block btn-success"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
