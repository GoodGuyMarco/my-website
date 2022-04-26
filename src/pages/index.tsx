import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import Envelope from "../svgs/envelope-light.svg";
import Code from "../svgs/terminal-light.svg";
import Marker from "../svgs/map-marker-alt-light.svg";
import GitHub from "../svgs/github-brands.svg";
import Xing from "../svgs/xing-brands.svg";
import LinkedIn from "../svgs/linkedin.svg";
import ArrowDown from "../svgs/arrow-down-light.svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Business Card" />
    <section className="h-full flex justify-center items-center bg-gray-200">
      <div className="w-full max-w-md p-4 mx-2 overflow-hidden rounded shadow-lg bg-white">
        <h1 className="mb-4 leading-none">
          <span className="block text-3xl font-bold mb-1">Marco Bartelt</span>
          <span className="block text-base">Software Engineer</span>
        </h1>
        <hr className="mb-4 border-dotted" />
        <ul className="mb-4">
          <li className="flex items-center mb-2">
            <Envelope className="w-5 h-5 mr-2" />
            <a href="mailto:marco.bartelt94@gmail.com">
              marco.bartelt94@gmail.com
            </a>
          </li>
          <li className="flex items-center mb-2">
            <Code className="w-5 h-5 mr-2" />
            ABS Safety GmbH
          </li>
          <li className="flex items-center">
            <Marker className="w-5 h-5 mr-2" />
            Essen, Germany
          </li>
        </ul>
        <div className="text-right">
          <a
            className="inline-block mr-2"
            href="https://github.com/GoodGuyMarco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My GitHub profile"
          >
            <GitHub height={20} />
          </a>
          <a
            className="inline-block mr-2"
            href="https://www.linkedin.com/in/marco-bartelt-4839b9233"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My LinkedIn profile"
          >
            <LinkedIn height={20} />
          </a>
          <a
            className="inline-block"
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
        className="absolute bottom-0 rounded-full h-12 w-12 flex items-center justify-center bg-white border-2 border-secondary mb-8 transition duration-200 transform hover:scale-110"
        href="#my-work"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
    <section
      id="my-work"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-4 pb-32"
    >
      <div className="md:w-96 w-full">
        <h2 className="block text-4xl my-10 font-semibold">My work</h2>
        <div>
          <h3 className="font-semibold mb-1">ApplyHigh</h3>
          <p className="mb-2 text-secondary">
            Together with three fellow students from university we developed a
            project that simplifies the creation of job applications.
          </p>
          <a
            href="https://www.apply-high.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            https://www.apply-high.de
          </a>
        </div>
        <hr className="my-8" />
        <div>
          <h3 className="font-semibold mb-1">Smart & Simple</h3>
          <p className="mb-2 text-secondary">
            After successfully launching an online platform (ApplyHigh) we
            decided to found a business that develops software services for
            customers.
          </p>
          <a
            href="https://www.smart-and-simple.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            https://www.smart-and-simple.de
          </a>
        </div>
        <hr className="my-8" />
        <div>
          <h3 className="font-semibold mb-1">Landhaus Edelweiss</h3>
          <p className="mb-2 text-secondary">
            A website showcasing a beautiful house in Austria with two bookable
            holiday homes for your perfect holiday in the Austrian mountains.
          </p>
          <a
            href="https://www.landhaus-edelweiss-oetz.at"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            https://www.landhaus-edelweiss-oetz.at
          </a>
        </div>
      </div>
      <a
        className="absolute bottom-0 rounded-full h-12 w-12 flex items-center justify-center bg-white border-2 border-secondary mb-8 transition duration-200 transform hover:scale-110"
        href="#contact-me"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
    <section
      id="contact-me"
      className="h-full flex flex-col justify-center items-center bg-gray-200 text-center"
    >
      <h2 className="block text-4xl mb-2">
        Want to <span className="font-semibold">talk</span>?
      </h2>
      <p className="mb-4 text-secondary">
        Feel free to contact me for business purposes.
      </p>
      <a
        href="mailto:marco.bartelt94@gmail.com"
        className="bg-white py-2 px-4 border-2 border-primary font-semibold rounded cursor-pointer transition duration-200 transform hover:scale-105"
      >
        Contact me
      </a>
    </section>
  </Layout>
);

export default IndexPage;
