import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo";
import '../components/scss/contact.scss';

export default function contact() {
  return (
    <div className="contact">
      <SEO title="Contact" />
      <h1>contact</h1>
      <h5>Email</h5>
      <a target="_newtab" href="mailto:kenny@knnyczr.com">kenny@knnyczr.com</a>

      <h5>Social</h5>
      <a target="_newtab" href="https://www.linkedin.com/in/kennycruzer/">LinkedIn</a>
      <a target="_newtab" href="https://github.com/knnyczr">GitHub</a>
      <a target="_newtab" href="http://instagram.com/knny.psd">Instagram</a>
      <a target="_newtab" href="https://twitter.com/knnyczr">Twitter</a>
      <a target="_newtab" href="https://dev.to/knnyczr">Dev.to</a>
    </div>
  );
}
