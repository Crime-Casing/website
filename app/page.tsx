import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "@/components/header/search-bar";

export default function Home() {
  return <main className={styles.main}>
    <SearchBar/>
  </main>;
}
