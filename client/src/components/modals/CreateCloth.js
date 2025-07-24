import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "./CreateCloth.module.css";
import { Context } from "../../index";
import {
  createCloth,
  fetchBrands,
  fetchClothes,
  fetchTypes,
} from "../../http/clothAPI";
import { observer } from "mobx-react-lite";

const CreateCloth = observer(({ isModalOpen, setIsModalOpen }) => {
  const { cloth } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchTypes().then((data) => cloth.setTypes(data));
    fetchBrands().then((data) => cloth.setBrands(data));
    fetchClothes().then((data) => cloth.setClothes(data.rows));
  }, []);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("brandId", `${cloth.selectedBrand.id}`);
    formData.append("typeId", `${cloth.selectedType.id}`);
    formData.append("img", file);
    console.log(cloth.selectedBrand.id);
    console.log(cloth.selectedType.id);

    createCloth(formData).then((data) => {
      setName("");
      setPrice("");
      cloth.setSelectedBrand({});
      cloth.setSelectedType({});
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    });
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => setIsModalOpen(false)}>
          ×
        </button>
        <h2>Add new cloth</h2>

        <select
          value={cloth.selectedType.id || ""}
          onChange={(e) => {
            const selected = cloth.types.find(
              (t) => t.id === Number(e.target.value)
            );
            cloth.setSelectedType(selected);
          }}
        >
          <option value="">Select type</option>
          {cloth.types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>

        <select
          value={cloth.selectedBrand.id || ""}
          onChange={(e) => {
            const selected = cloth.brands.find(
              (b) => b.id === Number(e.target.value)
            );
            cloth.setSelectedBrand(selected);
          }}
        >
          <option value="">Select brand</option>
          {cloth.brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Cloth name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className={styles.addBtn} onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
});

export default CreateCloth;
