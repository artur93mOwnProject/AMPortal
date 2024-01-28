import Link from "next/link";

import classes from "./header.module.css";

export default function Header() {
  return (
    <ul className={classes.menu}>
      <li>
        <Link href={"/about"}>AboutMe</Link>
      </li>
      <li>
        <Link href={"/portfolio"}>Portfolio</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
}
