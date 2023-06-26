import NavBar from "../NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Patrick+Hand+SC");
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        body {
          width: 100%;
          margin: 0 auto;
          background-color: #fafafa;
          font-family: "Patrick Hand SC", cursive;
          font-size: 2rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
