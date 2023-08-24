import styles from "../dashboard/Navegacao.module.css";

export default function Navegacao() {
  return (
    <aside className={styles.leftSide}>
      <nav>
        <ul className={styles.navComponents}>
          <h3 className={styles.listTitle}>Cadastro</h3>
          <li className={styles.listItem}>Clientes</li>
          <li className={styles.listItem}>Produtos</li>
          <h3 className={styles.listTitle}>Estoque</h3>
          <li className={styles.listItem}>Saldo</li>
          <li className={styles.listItem}>Entradas</li>
          <li className={styles.listItem}>Saidas</li>
        </ul>
      </nav>
    </aside>
  )
}
