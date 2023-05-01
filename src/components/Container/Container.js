import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: ${props => props.theme.text.regular};
`

export const PageTitle = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export const Container = ({  title, ...props }) => (
  <PageTitle title={title}>
    <Wrapper {...props} />
  </PageTitle>
)
