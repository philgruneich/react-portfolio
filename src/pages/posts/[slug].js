import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Container } from '~/components/Container';
import { getAllPostsWithSlug, getPostAndMorePosts } from '~/lib/api';

export default function Post ({ post, morePosts, preview }) {
  console.log(post, morePosts, preview);

  console.log(post.content);

  return (<Container title={pageTitle}>
    {documentToReactComponents(post.content)}
  </Container>)
}

const pageTitle = 'Phil Gruneich has a portfolio. Say Hi!';

export async function getStaticProps({ params, preview = true }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: false
  }
}
