import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import Link from 'next/link';

export default function Home({ data }) {
  return (
    <div>
      <h1>Pages</h1>
      <ul>
        {data.pages.nodes.map((page) => (
          <li key={page.id}>
            <Link href={`/page/${page.slug}`}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://your-wordpress-site.com/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query PagesQuery {
        pages {
          nodes {
            id
            title
            slug
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}
