import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Powered by{" "}
      <a href="https://wpengine.com" target="_blank" rel="noopener noreferrer">
        WP Engine
      </a>
      <span style={{ marginLeft: "8px" }}>
        &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}
