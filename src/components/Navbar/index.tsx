import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/future/image";
import Link from "next/link";
import { useState } from "react";
import { CollapsedGradient, ExpandedGradient } from "../Gradient";
import styles from "./index.module.scss";

/**
 * Toolbar containing just the navigation elements without
 * a gradient background
 */
const Toolbar = ({ collapsed }: { collapsed: Boolean }) => {
  const [mobileLinksVisible, setMobileLinksVisible] = useState(false);

  return (
    <div className={styles.navbarContainer}>
      <div>
        {collapsed ? (
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
        ) : null}
      </div>
      <div className={styles.navMobile}>
        <div className={styles.navSandwich}>
          <FontAwesomeIcon
            icon="bars"
            onClick={() => setMobileLinksVisible(!mobileLinksVisible)}
          />
        </div>
        {mobileLinksVisible ? (
          <div
            className={styles.modalBackground}
            onClick={() => setMobileLinksVisible(false)}
          >
            <div className={styles.navLinkModal}>
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
        ) : null}
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
 * Navbar with a gradient background.
 * If `collapsed` is true, it uses a smaller static gradient background.
 * If `collapsed` is false, it uses a larger animated gradient background.
 */
const Navbar = ({ collapsed = false }: { collapsed?: Boolean }) => {
  return (
    <div>
      {collapsed ? <CollapsedGradient /> : <ExpandedGradient />}
      <Toolbar collapsed={collapsed} />
    </div>
  );
};

export default Navbar;
