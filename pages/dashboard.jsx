import Logo from "../components/Logo";
import Head from "next/head";
import styles from "../styles/Header.module.css";
import Navegacao from "../components/dashboard/Navegacao";
import MainDashboard from "../styles/MainDashboard.module.css";
import Image from "next/image";
import Client from "../components/dashborardContent/Client";
import { useState } from "react";
import Products from "../components/dashborardContent/Protucts";

export default function Home() {
  const [buttonSelected, setButtonSelected] = useState(null);

  const renderContent = () => {
    if (buttonSelected === "clientes") {
      return <Client />
    } else if (buttonSelected === "produtos"){
      return <Products />
    } else {
      return null
    }
  };

  return (
    <>
      <Head>
        <title>Register&Stock</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.headerContainer}>
        <div>
          <Logo />
        </div>
        <div className={styles.headerLogin}>
          <Image
            src="/img/avatarLogin.png"
            width={100}
            height={50}
            alt="Avatar Login"
          />
          <h3>Olá, Matheus</h3>
        </div>
      </header>
      <main className={MainDashboard.mainContainer}>
        <Navegacao setButtonSelected={setButtonSelected} />
        {renderContent()}
      </main>
    </>
  );
}
