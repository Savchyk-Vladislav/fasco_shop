import React, { useState } from "react";
import styles from "./CreateBrand.module.css";
import { createBrand } from "../../http/clothAPI";

const CreateBrand = ({ isModalOpen, setIsModalOpen }) => {
  const [brandName, setBrandName] = useState("");

  const handleSubmit = () => {
    createBrand({ name: brandName }).then((data) => setBrandName(""));
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => setIsModalOpen(false)}>
          ×
        </button>
        <h2>Add new brand</h2>
        <input
          type="text"
          placeholder="Brand name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <button className={styles.addBtn} onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateBrand;
