import styles from "../dashboard/Navegacao.module.css";

export default function Navegacao() {
  return (
    <aside className={styles.leftSide}>
      <nav>
        <ul className={styles.navComponents}>
          <li className={styles.listItem}>Consulta</li>
          <li className={styles.listItem}>Clientes</li>
          <li className={styles.listItem}>Entradas</li>
          <li className={styles.listItem}>Saidas</li>
        </ul>
      </nav>
    </aside>
  )
}
