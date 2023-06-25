import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="main">
        <h1>About Us</h1>
        <h3>
          Welcome to the official explorer for The New York Times Best Seller
          list explorer.
        </h3>
        <h3>We hope you enjoy your stay!</h3>
        <style jsx>
          {`
            .main {
              max-width: 800px;
              margin: 0 auto;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
              height: 100%;
              background-color: white;
              padding: 10px 50px;
            }

            h3 {
              font-size: 1rem;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
