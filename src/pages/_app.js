import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { LanguageStore } from '~/store/LanguageStore';
import { HighContrastStore } from '~/store/HighContrastStore';
import { Layout } from '~/components/Layout';
import { theme } from '~/theme';
import 'normalize.css';

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
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </HighContrastStore>
      </LanguageStore>
    )
  }
}
