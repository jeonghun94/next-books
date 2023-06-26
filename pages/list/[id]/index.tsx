import { NextPageContext } from "next";
import Layout from "@/components/Layout";
import Link from "next/link";

interface BooksDataProps {
  amazon_product_url: string;
  book_image: string;
  author: string;
  title: string;
}

export default function Books({ books }: { books: BooksDataProps[] }) {
  return (
    <Layout>
      <div className="main">
        {books.map((item: BooksDataProps, idx) => (
          <div key={idx} className="item">
            <Link href={item.amazon_product_url} target="_blank">
              <img src={item.book_image} width="100%" height="250" />
              <div className="item__info">
                <h1>{item.title}</h1>
                <h3>{item.author}</h3>
                Buy Now
              </div>
            </Link>
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

export const getServerSideProps = async function ({ query }: NextPageContext) {
  const { id } = query;
  const {
    results: { books },
  } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
  ).json();

  return {
    props: {
      books,
    },
  };
};
