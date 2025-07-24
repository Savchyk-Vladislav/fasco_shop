import React, { useState } from "react";
import styles from "./CreateBrand.module.css";
import { createAdmin } from "../../http/userAPI";

const CreateAdmin = ({ isModalOpen, setIsModalOpen }) => {
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = () => {
    createAdmin({ email: userEmail }).then((data) => setUserEmail(""));
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => setIsModalOpen(false)}>
          ×
        </button>
        <h2>Add new admin</h2>
        <input
          type="email"
          placeholder="user@gmail.com"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button className={styles.addBtn} onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateAdmin;
