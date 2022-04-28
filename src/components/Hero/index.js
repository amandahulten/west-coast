import styles from "./Hero.module.scss";

const Hero = () => {
    return (
      <div className={styles.heroContainer}>
          <div>
            <h2>Låt vädret visa dig Vägen på Västkusten!</h2>
          </div>
          <div>
              <p>Här är en hemsida där du kan hitta det bästa vädret på Västkusten just nu. Välj bara mellan norr eller söder om Göteborg, så visas de största utflytsmålen baserat på var det är varmast just nu.</p>
          </div>
      </div>
    );
  };
  
  export default Hero;