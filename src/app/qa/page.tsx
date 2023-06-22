import { Question } from "../components/Question/Question";
import { QuestionConfig } from "../utils/constants";
import styles from "./style.module.css";

export default function QAPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.question}>Вопросы-ответы</div>
      <ul className={styles.list}>
        {QuestionConfig.map(({ question, answer }) => {
          return (
            <li key={question}>
              <Question question={question} answer={answer} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
