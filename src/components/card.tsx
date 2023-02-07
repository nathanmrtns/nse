import styles from "@/styles/Card.module.css";

export default function Card({ question }: { question: string }) {
  return (
    <div className={styles.card}>
      <h2>{question}</h2>
    </div>
  );
}
