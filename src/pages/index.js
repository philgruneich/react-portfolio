import React from 'react';
import { Container } from '~/components/Container';
import { Work } from '~/containers/Work';
import { Intro } from '~/containers/Intro';
import { Footer } from '~/containers/Footer';

export default () => {
  return (
    <Container title={pageTitle}>
      <Intro />
      <Work />
      <Footer />
    </Container>
  )
}

const pageTitle = 'Phil Gruneich has a portfolio. Say Hi!';
