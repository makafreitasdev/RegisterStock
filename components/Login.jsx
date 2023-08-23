import Button from './Button'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder='usuário' className={styles.input} />
      </div>
      <div className={styles.inputContainer}>
        <input type="password" placeholder='senha' className={styles.input} />
      </div>
      <Button />
      <a href='#' className={styles.loginCadastro}>Cadastre-se</a>
    </div>
  );
}
