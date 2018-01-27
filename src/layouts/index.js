import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { config } from '../../site-config'
ReactGA.initialize(config.googleAnalyticsId);

import favicon from "../img/favicon.png";

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const SiteHemlet = (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{config.siteName + " | " + config.tagline}</title>
    <meta name="description" content={config.description} />
    <meta name="keywords" content={config.keywords} />
    <meta name="url" content={config.siteUrl} />
    <link type="image/x-icon" rel="shortcut icon" href={favicon} />
    <meta name="google-site-verification" content={config.googleSiteVerification} />

    {/*<!-- Google / Search Engine Tags -->*/}
    <meta itemprop="name" content={config.siteName + " | " + config.tagline} />
    <meta itemprop="description" content={config.description} />
    <meta itemprop="image" content={config.siteUrl + config.siteImage} />

    {/*<!-- Facebook Meta Tags -->*/}
    <meta property="og:url" content={config.siteUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={config.siteName + " | " + config.tagline} />
    <meta property="og:description" content={config.description} />
    <meta property="og:image" content={config.siteUrl + config.siteImage} />

    {/*<!-- Twitter Meta Tags -->*/}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={config.siteName + " | " + config.tagline} />
    <meta name="twitter:description" content={config.description} />
    <meta name="twitter:image" content={config.siteUrl + config.siteImage} />
  </Helmet>
);

import './index.css'

class TemplateWrapper extends React.Component {
  trackPage() {
    if(typeof window !== `undefined`) {
      if(process.env.track === 'true') {
        ReactGA.pageview(window.location.pathname);
      } else {
        console.log("tracking page: ", window.location.pathname);
      }
    }
  }
  render() {
    this.trackPage();
    return (
      <div id="wrapper">
        {SiteHemlet}
        <Header />
        <div id="content">
          {this.props.children()}
        </div>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
