import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <p className={router.pathname === "/" ? "active" : ""}>Home</p>
      </Link>
      <Link href="/about">
        <p className={router.pathname === "/about" ? "active" : ""}>About</p>
      </Link>
    </nav>
  );
};

export default NavBar;
