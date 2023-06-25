import { useEffect, useState } from "react";
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

export default function Index() {
  const [data, setData] = useState<IndexDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch("https://books-api.nomadcoders.workers.dev/lists")
      ).json();
      setData(results);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Layout isLoading={isLoading}>
      <div className="main">
        <p>The New York Times Best Seller Explorer</p>
        {data.map((item: IndexDataProps, idx) => (
          <Link
            key={idx}
            className="item"
            href={{
              pathname: `/list/${item.list_name}`,
            }}
          >
            <h1>{item.display_name}</h1>
          </Link>
        ))}
        <style jsx>
          {`
            .main {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              gap: 20px;
              max-width: 800px;
              margin: 0 auto;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
              height: 100%;
              background-color: white;
              padding: 30px 50px;
            }

            p {
              width: 100%;
              grid-column: 1 / -1;
              font-size: 1.5rem;
              font-weight: 600;
              text-align: center;
            }

            h1 {
              font-size: 1rem;
              cursor: pointer;
              padding: 10px 20px;
              border: 1px solid #ddd;
              border-radius: 10px;
              transition: all 0.3s ease-in-out;
              &:hover {
                background-color: #222;
                color: white;
              }
            }

            a {
              text-decoration: none;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
