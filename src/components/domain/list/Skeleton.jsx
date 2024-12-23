import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton() {
  return (
    <ul className={styles.skeletonContainer}>
      <li className={styles.skeletonBox}>
        <div className={styles.skeletonLoading}></div>
      </li>
      <li className={styles.skeletonBox}>
        <div className={styles.skeletonLoading}></div>
      </li>
      <li className={styles.skeletonBox}>
        <div className={styles.skeletonLoading}></div>
      </li>
      <li className={styles.skeletonBox}>
        <div className={styles.skeletonLoading}></div>
      </li>
    </ul>
  );
}
