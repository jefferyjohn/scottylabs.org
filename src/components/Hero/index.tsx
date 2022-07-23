import Image from "next/image";
import Typography from "../Typography";
import styles from "./index.module.scss";

/**
 * Hero component containing the ScottyLabs icon
 * and the title
 */
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImage}>
        <Image
          width={350}
          height={350}
          src="/icons/scotty-dog.svg"
          alt="ScottyLabs icon"
        />
      </div>
      <Typography className={styles.heroTitle} variant="header">
        ScottyLabs
      </Typography>
    </div>
  );
};

export default Hero;
