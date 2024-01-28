import classes from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={classes.main}></main>
    </>
  );
}
