import { QuestionConfig } from "../../../../utils/constants";
import { Question } from "./Question/Question";
import styles from "./style.module.css";

export default function QA() {
  return (
    <>
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
    </>
  );
}
