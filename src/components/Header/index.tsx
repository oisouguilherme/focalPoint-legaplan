import Image from "next/image";
import LogoFocalPoint from "../../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Image src={LogoFocalPoint} alt="Logo FocalPoint" />
      <h1>Bem-vindo de volta, Marcus</h1>
      <p>Segunda, 22 de dezembro de 2024</p>
    </header>
  );
}
