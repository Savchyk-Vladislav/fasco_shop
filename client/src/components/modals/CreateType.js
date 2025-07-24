import React, { useState } from "react";
import styles from "./CreateType.module.css";
import { createType } from "../../http/clothAPI";

const CreateType = ({ isModalOpen, setIsModalOpen }) => {
  const [typeName, setTypeName] = useState("");

  const handleSubmit = () => {
    createType({name: typeName}).then((data) => setTypeName(""));
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => setIsModalOpen(false)}>
          ×
        </button>
        <h2>Add new type</h2>
        <input
          type="text"
          placeholder="Type name"
          value={typeName}
          onChange={(e) => setTypeName(e.target.value)}
        />
        <button className={styles.addBtn} onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateType;
