import { FC, PropsWithChildren } from "react";
import styles from "./style.module.css";
import classNames from "classnames";

type WrapperCardProps = {
  isGrow?: boolean;
  isColor?: boolean;
} & PropsWithChildren;

export const WrapperCard: FC<WrapperCardProps> = ({
  children,
  isGrow,
  isColor,
}) => {
  return (
    <div
      className={classNames(
        { [styles["wrapper__grow"]]: isGrow },
        { [styles["wrapper__color"]]: isColor },
        styles.wrapper
      )}
    >
      {children}
    </div>
  );
};
