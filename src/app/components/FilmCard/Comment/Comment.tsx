import { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { InfoField } from "../InfoField/InfoField";
import { ReviewResponse } from "../../../../redux/films/filmApi";

const defaultImageSrc = "/template.svg";

export const Comment: FC<ReviewResponse> = ({ name, image, rating, text }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={image ?? defaultImageSrc} alt="" width={100} height={100} />
      <div className={styles.info}>
        <div className={styles["wrapper-title"]}>
          <span>{name}</span>
          <InfoField
            invert={true}
            field="Оценка"
            value={`${Math.round(rating)}`}
          />
        </div>
        <span className={styles["description-info"]}>{text}</span>
      </div>
    </div>
  );
};
