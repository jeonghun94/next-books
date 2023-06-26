import Layout from "@/components/Layout";
import Link from "next/link";

interface IndexDataProps {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default function Index({ results }: { results: IndexDataProps[] }) {
  return (
    <Layout>
      <div className="main">
        <p>The New York Times Best Seller Explorer</p>
        {results.map((item: IndexDataProps, idx) => (
          <Link
            key={idx}
            className="item"
            href={{
              pathname: `/list/${item.list_name}`,
            }}
          >
            <button>{`${item.display_name}`}</button>
          </Link>
        ))}

        <style jsx>
          {`
            .main {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              gap: 20px;
              max-width: 800px;
              margin: 0 auto;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
              height: 100%;
              background-color: white;
              padding: 0px 50px;
            }

            p {
              grid-column: 1 / -1;
              font-size: 2.5rem;
              font-weight: bold;
              text-align: center;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async function () {
  const { results } = await (
    await fetch("https://books-api.nomadcoders.workers.dev/lists")
  ).json();

  return {
    props: {
      results,
    },
  };
};
