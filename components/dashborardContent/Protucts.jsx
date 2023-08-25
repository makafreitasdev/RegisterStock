import styles from "../dashborardContent/Products.module.css";

export default function Produts() {
  return (
    <div className={styles.dashboardContent}>
      <div className={styles.searchContent}>
        <input
          type="text"
          placeholder="Nome do produto"
          className={styles.searchInput}
        />
        <input
          type="number"
          placeholder="Valor"
          className={styles.searchInputValue}
        />
        <button className={styles.searchButton}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}