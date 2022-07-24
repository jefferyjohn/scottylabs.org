import Image from "next/future/image";
import Link from "next/link";
import Gradient from "../Gradient";
import styles from "./index.module.scss";

/**
 * Toolbar containing just the navigation elements without
 * a gradient background
 */
const Toolbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navICconContainer}>
        <Link href="/" passHref>
          <a>
            <Image
              className={styles.navIcon}
              src="/icons/scotty-dog.svg"
              width={32}
              height={32}
              alt="ScottyLabs icon"
            />
          </a>
        </Link>
      </div>
      <div className={styles.navLinkContainer}>
        <Link href="/about" passHref>
          <a className={`link ${styles.navLink}`}>/about</a>
        </Link>
        <Link href="/tech" passHref>
          <a className={`link ${styles.navLink}`}>/tech</a>
        </Link>
        <Link href="/design" passHref>
          <a className={`link ${styles.navLink}`}>/design</a>
        </Link>
        <Link href="/events" passHref>
          <a className={`link ${styles.navLink}`}>/events</a>
        </Link>
      </div>
    </div>
  );
};

/**
 * Final navbar with a gradient background.
 * If `home` is true, this expands the gradient background to cover
 * the background of the hero component
 */
const Navbar = ({ home = false }: { home?: Boolean }) => {
  return (
    <div>
      <div className={styles.gradientContainer}>
        <Gradient className={styles.gradient} />
        {home ? (
          <svg width={0} height={0}>
            <defs>
              <clipPath id="gradientClipPath" clipPathUnits="objectBoundingBox">
                <path d="M0,0.8 C0.4,1 0.6,0.4 1,0.6 L1,0 L0,0 Z" />
              </clipPath>
            </defs>
          </svg>
        ) : null}
      </div>
      <Toolbar />
    </div>
  );
};

export default Navbar;
