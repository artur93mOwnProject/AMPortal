import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="logo" width={50} height={50}></Image>
    </Link>
  );
}
