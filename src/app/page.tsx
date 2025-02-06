import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <form action="/submit">
        <input type="text" name={'name'}/>
        <button>submit</button>
      </form>

    </div>
  );
}
