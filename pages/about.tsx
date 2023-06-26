import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="main">
        <h3>About Us</h3>
        <h6>
          Welcome to the official explorer for The New York Times Best Seller
          list explorer.
        </h6>
        <style jsx>
          {`
            .main {
              max-width: 800px;
              margin: 0 auto;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
              height: 100%;
              padding: 10px 50px;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
