import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from "@apollo/client";
import client from "../../client";
import { BlockRenderer } from 'components/BlockRenderer';
import { cleanandTransformBlocks } from 'utils/cleanandTransformBlocks';


export default function Home(props) {
  console.log("props: ", props);
  return (
    <>
      <BlockRenderer blocks={props.blocks} />
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
    query NewQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks
        }
      }
    }
    `,
  });

  return {
    props: {
      blocks: cleanandTransformBlocks(data.nodeByUri.blocks),
    }
  }
}
