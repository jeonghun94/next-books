import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Link from "next/link";

interface BooksDataProps {
  amazon_product_url: string;
  book_image: string;
  author: string;
  title: string;
}

export default function Books() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<BooksDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const {
        results: { books },
      } = await (
        await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
      ).json();
      setData(books);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Layout isLoading={isLoading}>
      <div className="main">
        {data.map((item: BooksDataProps, idx) => (
          <div key={idx} className="item">
            <img src={item.book_image} width="100%" height="250" />
            <div className="item__info">
              <h1>{item.title}</h1>
              <h3>{item.author}</h3>
              <Link href={item.amazon_product_url}>Buy Now</Link>
            </div>
          </div>
        ))}
        <style jsx>
          {`
            .main {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
              gap: 20px;
              max-width: 800px;
              margin: 0 auto;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
              height: 100%;
              background-color: white;
              padding: 30px 50px;
            }

            .item {
              border: 1px solid #ddd;
            }

            .item__info {
              padding: 10px;
            }

            h1 {
              font-size: 0.9rem;
              font-weight: 600;
            }

            h3 {
              font-size: 0.7rem;
              color: #66a3ff;
            }

            a {
              text-decoration: none;
              font-size: 1rem;
            }

            p {
              width: 100%;
              grid-column: 1 / -1;
              font-size: 1.5rem;
              font-weight: 600;
              text-align: center;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
