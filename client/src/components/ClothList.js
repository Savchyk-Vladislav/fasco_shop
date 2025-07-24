import React, { useContext } from "react";
import styles from "./ClothList.module.css";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import ClothItem from "./ClothItem";

const ClothList = observer(() => {
  const { cloth } = useContext(Context);

  const uniqueClothes = cloth.clothes.filter(
    (item, index, self) => index === self.findIndex((t) => t.name === item.name)
  );

  return (
    <div className={styles.mainContainer}>
      {uniqueClothes.map((cloth) => (
        <ClothItem key={cloth.id} cloth={cloth} />
      ))}
    </div>
  );
});

export default ClothList;
