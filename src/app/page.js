import Image from "next/image";
import styles from "./page.module.css";
import Dictionary from "./Components/Dictionary";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Wordly</h1>
        <Dictionary />
      </div>
    </main>
  );
}
