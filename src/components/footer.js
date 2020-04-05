import React from 'react';
import './scss/footer.scss'

export default function Footer() {
  return (
    <footer>
        <div className="links">
            <a href="http://instagram.com/knny.psd">Instagram</a>
            <a href="https://twitter.com/knnyczr">Twitter</a>
            <a href="https://dev.to/knnyczr">Dev</a>
            <a href="/works">Store</a>
            <a href="/works">FAQ</a>
        </div>
        <span>© Kenneth Cruz  {new Date().getFullYear()}</span>
    </footer>
  );
}
