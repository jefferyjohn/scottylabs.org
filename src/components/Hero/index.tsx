import Image from "next/future/image";
import Typography from "../Typography";
import styles from "./index.module.scss";

/**
 * Hero component containing the ScottyLabs icon
 * and the title
 */
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Image
        className={styles.heroImage}
        src="/icons/scotty-dog.svg"
        width={305}
        height={255}
        alt="ScottyLabs icon"
      />
      <Typography className={styles.heroTitle} variant="header">
        ScottyLabs
      </Typography>
    </div>
  );
};

export default Hero;
