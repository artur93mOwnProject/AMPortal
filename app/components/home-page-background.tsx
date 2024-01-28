import classes from "./home-page-background.module.css";

export default function HomePageBackground() {
  return (
    <>
      <div className={classes.upper}>
        <div className={classes.upperShadow}></div>
      </div>
      <div className={classes.lower}></div>
    </>
  );
}
