/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Services, Portfolios, Advantages, Testimonials,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBackToTop: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const show = window.scrollY > 300;
    const { showBackToTop } = this.state;
    if (show !== showBackToTop) {
      this.setState({ showBackToTop: show });
    }
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    const { showBackToTop } = this.state;

    return (
      <>
        <Header />
        <Hero />
        <Service data={Services} />
        <Portfolio data={Portfolios} />
        <Advantage data={Advantages} />
        <Testimonial data={Testimonials} />
        <Discuss />
        <Footer />

        {showBackToTop && (
  <button
    type="button"
    onClick={this.scrollToTop}
    className="fixed bottom-6 right-6 z-50 p-4 bg-theme-purple text-white rounded-full shadow-xl hover:bg-purple-700 transition-all duration-300 flex items-center justify-center"
    aria-label="Back to top"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
        )}

      </>
    );
  }
}
