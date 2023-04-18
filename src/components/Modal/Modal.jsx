import { useState } from "react";
import style from "./Modal.module.scss";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  function openModal() {
    setShowModal(!showModal);
  }
  function closeModal() {
    setShowModal(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, address, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setName("");
        setAddress("");
        setEmail("");
      })
      .catch((err) => {
        console.error(err);
      });
    closeModal();
  }
  return (
    <>
      <button onClick={openModal}>POST</button>
      {showModal && (
        <div id="overlay" className={style.overlay}>
          <div className={style["form-container"]}>
            <button onClick={() => closeModal(false)} className={style.close}>
              X
            </button>

            <form onSubmit={handleFormSubmit}>
              <div className="form-control">
                <label>Name</label>
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label>Address</label>
                <br />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label>Email</label>
                <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={style["post-btn"]}>
                POST
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
