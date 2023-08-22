import Button from './Button'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder='usuário' className={styles.input} />
      </div>
      <div className={styles.inputContainer}>
        <input type="text" placeholder='senha' className={styles.input} />
      </div>
      <Button />
      <p className={styles.loginCadastro}>Cadastre-se</p>
    </div>
  );
}
