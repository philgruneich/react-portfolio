import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { LanguageStore } from '~/store/LanguageStore';
import { HighContrastStore } from '~/store/HighContrastStore';
import { Layout } from '~/components/Layout';
import { theme } from '~/theme';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    super.componentDidCatch(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Something went wrong.</h1>
    }

    const { Component, pageProps } = this.props;

    return (
      <LanguageStore>
        <HighContrastStore>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </HighContrastStore>
      </LanguageStore>
    )
  }
}

// const wavyBackgroundSvg = props => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 6"><style>.q{animation:s .4s linear infinite;}@keyframes s {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path d="M40 3.882 40.076 6H0V3.882c2.241 0 3.355-.82 4.476-1.623C5.855 1.271 7.241.3 10 .3s4.145.971 5.524 1.959c1.121.803 2.235 1.623 4.476 1.623s3.355-.82 4.476-1.623C25.855 1.271 27.241.3 30 .3s4.145.971 5.524 1.959c1.121.803 2.235 1.623 4.476 1.623Z" style="fill:${props.hasHighContrast ? '#000' : props.theme.yellow}" class="q"/></svg>`

// const wavyBackground = props => `data:image/svg+xml;,${encodeURIComponent(wavyBackgroundSvg(props))}`;

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #00bd70;
    ${'' /* background-image: ${props => `url("${wavyBackground(props)}")`};
    background-position: top left;
    background-repeat: repeat-x;
    background-size: 20%; */}
  }
`;
