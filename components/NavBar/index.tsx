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
      <style jsx>{`
        nav {
          width: 100%;
          height: 60px;
          background-color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid #eee;
        }

        a {
          color: #c2c2c2;
          padding-bottom: 5px;
        }
        .active {
          font-weight: 600;
          border-bottom: 2px solid #333;
          color: #333;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
