import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <section className="h-full flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-4xl mb-2">
        What are <span className="font-semibold">you</span> looking for?
      </h1>
      <p className="mb-4 text-secondary">
        You just hit a page that does not exist... the sadness.
      </p>
      <Link
        to="/"
        className="bg-white py-2 px-4 border-2 border-primary font-semibold rounded cursor-pointer transition duration-200 transform hover:scale-105"
      >
        Take me back
      </Link>
    </section>
  </Layout>
);

export default NotFoundPage;
