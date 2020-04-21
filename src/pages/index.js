import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Envelope from '../svgs/envelope-light.svg';
import Code from '../svgs/terminal-light.svg';
import Marker from '../svgs/map-marker-alt-light.svg';
import GitHub from '../svgs/github-brands.svg';
import Xing from '../svgs/xing-brands.svg';
import ArrowDown from '../svgs/arrow-down-light.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Business Card" />
    <section className="h-full flex justify-center items-center bg-gray-300">
      <div
        className="w-full max-w-md p-4 mx-2 overflow-hidden rounded shadow-lg bg-white">
        <h1 className="mb-4 leading-none">
          <span className="block text-3xl font-bold mb-1">Marco Bartelt</span>
          <span className="block text-base">Software Engineer</span>
        </h1>
        <hr className="mb-4 border-dotted" />
        <ul className="mb-4">
          <li className="flex items-center mb-2">
            <Envelope className="w-5 h-5 mr-2" />
            <a href="mailto:marco.bartelt94@gmail.com">marco.bartelt94@gmail.com</a>
          </li>
          <li className="flex items-center mb-2">
            <Code className="w-5 h-5 mr-2" />
            <a href="https://www.pro-volution.de"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Current employer"
            >
              pro.volution GmbH
            </a>
          </li>
          <li className="flex items-center">
            <Marker className="w-5 h-5 mr-2" />
            Essen, Germany
          </li>
        </ul>
        <div className="text-right">
          <a className="inline-block mr-2"
             href="https://github.com/GoodGuyMarco"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="My GitHub profile"
          >
            <GitHub height={20} />
          </a>
          <a className="inline-block"
             href="https://www.xing.com/profile/Marco_Bartelt2"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="My Xing profile"
          >
            <Xing height={20} />
          </a>
        </div>
      </div>
      <a
        className="absolute bottom-0 rounded-full h-12 w-12 flex items-center justify-center bg-white mb-4 transition duration-200 transform hover:scale-110"
        href="#contact-me"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
    <section id="contact-me" className="h-full flex flex-col justify-center items-center">
      <h2 className="block text-4xl">Need a <span className="font-semibold text-blue-600">website</span>?</h2>
      <p className="mb-4">Or know someone who needs one.</p>
      <a
        href="mailto:marco.bartelt94@gmail.com"
        className="bg-white py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded cursor-pointer transition duration-200 transform hover:scale-105"
      >
        Contact me
      </a>
    </section>
  </Layout>
);

export default IndexPage;
