import styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.dashboardContent}>
      <div className={styles.searchContent}>
        <input
          type="text"
          placeholder="Nome do cliente"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>Pesquisar</button>
      </div>
      <div className={styles.tableContent}>
        <table className={styles.table}>
          <tr>
            <th className={styles.tableHead}>ID</th>
            <th className={styles.tableHead}>Nome</th>
            <th className={styles.tableHead}>CPF</th>
            <th className={styles.tableHead}>Endereço</th>
          </tr>
          <tr>
            <td className={styles.tableData}>1</td>
            <td className={styles.tableData}>João Silva</td>
            <td className={styles.tableData}>123.456.789-00</td>
            <td className={styles.tableData}>Rua A, 123</td>
          </tr>
          <tr>
            <td className={styles.tableData}>2</td>
            <td className={styles.tableData}>Maria Souza</td>
            <td className={styles.tableData}>987.654.321-00</td>
            <td className={styles.tableData}>Avenida B, 456</td>
          </tr>
          <tr>
            <td className={styles.tableData}>3</td>
            <td className={styles.tableData}>Carlos Oliveira</td>
            <td className={styles.tableData}>456.789.123-00</td>
            <td className={styles.tableData}>Rua C, 789</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
