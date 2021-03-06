import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>…</Head>
      <section>…</section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
