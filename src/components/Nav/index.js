import styles from "./Nav.module.scss";

const Nav = () => {
    return (
      <div className={styles.navContainer}>
          <div>
            <h1>VV</h1>
          </div>
          <div>
              <img src="./assets/hamburger.png" alt="hamburger"/>
          </div>
      </div>
    );
  };
  
  export default Nav;