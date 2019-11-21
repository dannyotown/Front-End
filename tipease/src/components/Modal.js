import React, { useState } from "react";
import api from "../../src/utils/api";

export default function Modal({
  handleClose,
  show,
  worker,
  setServiceWorkers
}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [getTip, setTip] = useState({
    username: worker.username,
    company: worker.company,
    balance: ""
  });
  const changeHandler = e => {
    setTip({
      ...getTip,
      [e.target.name]: e.target.value
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    let TipAmount = document.getElementById("TipAmount").value;
    if (TipAmount < worker.balance) {
      alert("Tip has to be more than current Balance");
      setTip({
        ...getTip,
        balance: ""
      });
    } else {
      api()
        .put(`/api/customers/${worker.id}/tip`, getTip)
        .then(() => {
          api()
            .get("/api/serviceworker/")
            .then(response => setServiceWorkers(response.data))
            .catch(err => console.log(err));
          alert(`Tip Added for ${worker.FirstName} ${worker.LastName}!`);
          setTip({
            ...getTip,
            balance: ""
          });
        })
        .catch(error => console.log(error));
    }
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        Current Amount: ${worker.balance}
        <div>
          <form onSubmit={submitHandler}>
            <input
              type="number"
              id="TipAmount"
              onChange={changeHandler}
              name="balance"
              value={getTip.balance}
              placeholder="$ Tip Amount"
            />
            <button className="ModalUpdate" onClick={handleClose}>
              Add Tip
            </button>
          </form>
          <button className="ModalClose" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
