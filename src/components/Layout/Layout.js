import React from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

const Wrapper = styled.div.attrs({
  'data-testid': 'wrapper'
})`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.main`
  position: relative;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
`;

const fontsPath = '/assets/fonts';

export const Layout = props => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle />
    <Wrapper>
      <Container {...props} />
    </Wrapper>
  </>
);

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Apercu Pro';
    src: url('${fontsPath}/ApercuPro-Regular.woff2') format('woff2'),
        url('${fontsPath}/ApercuPro-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu Pro';
    src: url('${fontsPath}/ApercuPro-Bold.woff2') format('woff2'),
        url('${fontsPath}/ApercuPro-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  :root {
    box-sizing: border-box;
    font-family: 'Apercu Pro', Apercu, 'Comic Sans', Helvetica, sans-serif;
    --yMargin: 10.75vmin;
    --xMargin: 7.125vmin;

    &:before,
    &:after {
      box-sizing: border-box;
    }

    * {
      box-sizing: inherit;

      &:before,
      &:after {
        box-sizing: inherit;
      }
    }
  }

  html,
  body {
    font-size: 10px;
  }
`;
