import React, { useState } from "react";
import styles from "./Admin.module.css";
import Navbar from "../components/Navbar";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateCloth from "../components/modals/CreateCloth";
import CreateAdmin from "../components/modals/CreateAdmin";

const Admin = () => {
  const [isTypeVisible, setIsTypeVisible] = useState(false);
  const [isBrandVisible, setIsBrandVisible] = useState(false);
  const [isClothVisible, setIsClothVisible] = useState(false);
  const [isAdminVisible, setIsAdminVisible] = useState(false);

  return (
    <div>
      <Navbar />
      <div className={styles.mainButtons}>
        <button className={styles.btn} onClick={() => setIsTypeVisible(true)}>
          Add new type
        </button>
        <button className={styles.btn} onClick={() => setIsBrandVisible(true)}>
          Add new brand
        </button>
        <button className={styles.btn} onClick={() => setIsClothVisible(true)}>
          Add new cloth
        </button>
        <button className={styles.btn} onClick={() => setIsAdminVisible(true)}>
          Add new admin
        </button>
      </div>
      <CreateType
        isModalOpen={isTypeVisible}
        setIsModalOpen={setIsTypeVisible}
      />
      <CreateBrand
        isModalOpen={isBrandVisible}
        setIsModalOpen={setIsBrandVisible}
      />
      <CreateCloth
        isModalOpen={isClothVisible}
        setIsModalOpen={setIsClothVisible}
      />
      <CreateAdmin
        isModalOpen={isAdminVisible}
        setIsModalOpen={setIsAdminVisible}
      />
    </div>
  );
};

export default Admin;
