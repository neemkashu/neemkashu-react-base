import { FC } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { InfoField } from "../InfoField/InfoField";

type CommentProps = {
  name: string;
  image: string;
  rating: string;
  description: string;
};

export const Comment: FC<CommentProps> = ({
  name,
  image,
  rating,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image src={image} alt="" width={100} height={100} />
      <div className={styles.info}>
        <div className={styles["wrapper-title"]}>
          <span>{name}</span>
          <InfoField invert={true} field="Оценка" value={rating} />
        </div>
        <span className={styles["description-info"]}>{description}</span>
      </div>
    </div>
  );
};
