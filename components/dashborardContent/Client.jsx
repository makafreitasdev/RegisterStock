import styles from "../dashborardContent/Client.module.css";

export default function Client() {
  return (
    <div className={styles.dashboardContent}>
      <div className={styles.searchContent}>
        <input
          type="text"
          placeholder="Nome do cliente"
          className={styles.searchInput}
        />
        <input
          type="text"
          placeholder="CPF"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}
