import React, { useContext } from "react";
import styles from "./Pagination.module.css";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const Pagination = observer(() => {
  const { cloth } = useContext(Context);
  const pageCount = Math.ceil(cloth.totalCount / cloth.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div className={styles.mainContainer}>
      {pages.map((page) => (
        <button
          key={page}
          className={
            cloth.page === page
              ? `${styles.pageButton} ${styles.activePage}`
              : styles.pageButton
          }
          onClick={() => cloth.setPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
});

export default Pagination;
