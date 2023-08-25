import { useState } from "react";
import styles from "../dashborardContent/Register.module.css";

export default function Register() {
  const [showComponent, setShowComponent] = useState(false);
  const [nameClient, setNomeClient] = useState("");
  const [cpfClient, setCpfClient] = useState("");

  const handlerClick = () => {
    setShowComponent(true);
  };

  return (
    <div className={styles.dashboardContent}>
      <div className={styles.searchContent}>
        <input
          type="text"
          placeholder="Nome do cliente"
          value={nameClient}
          onChange={(e) => setNomeClient(e.target.value)}
          className={styles.searchInput}
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpfClient}
          onChange={(e) => setCpfClient(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handlerClick} className={styles.searchButton}>
          Cadastrar
        </button>
        <div className={styles.tableContent}>
          {showComponent && <MyComponent />}
        </div>
      </div>
    </div>
  );

  function MyComponent() {
    return (
      <div>  
        
      </div>
    );
  }
}
