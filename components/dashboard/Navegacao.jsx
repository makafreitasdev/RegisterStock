import styles from "../dashboard/Navegacao.module.css";

export default function Navegacao({ setButtonSelected }) {
  return (
    <aside className={styles.leftSide}>
      <nav>
        <div className={styles.navComponents}>
          <h3 className={styles.listTitle}>Cadastro</h3>
          <button onClick={() => setButtonSelected('clientes')} className={styles.listItem}>Clientes</button>
          <button onClick={() => setButtonSelected('produtos')} className={styles.listItem}>Produtos</button>
          <h3 className={styles.listTitle}>Estoque</h3>
          <button className={styles.listItem}>Saldo</button>
          <button className={styles.listItem}>Entradas</button>
          <button className={styles.listItem}>Saidas</button>
        </div>
      </nav>
    </aside>
  )
}
