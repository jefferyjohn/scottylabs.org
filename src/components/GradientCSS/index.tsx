import styles from "./index.module.scss";

const GradientCSS = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.gradientContainer}>
        <div className={styles.gradientSpotlight}></div>
        <div className={styles.gradientSpotlight}></div>
        <div className={styles.gradientSpotlight}></div>
        <div className={styles.gradientSpotlight}></div>
      </div>
    </div>
  );
};

export default GradientCSS;
