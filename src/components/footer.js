import React from 'react';
import './scss/footer.scss'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faDev, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
    <footer>
        <div className="links">
            <a target="_newtab" href="mailto:kenny@knnyczr.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a target="_newtab" href="https://www.linkedin.com/in/kennycruzer/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a target="_newtab" href="https://github.com/knnyczr"><FontAwesomeIcon icon={faGithub} /></a>
            <a target="_newtab" href="http://instagram.com/knny.psd"><FontAwesomeIcon icon={faInstagram} /></a>
            <a target="_newtab" href="https://twitter.com/knnyczr"><FontAwesomeIcon icon={faTwitter} /></a>
            <a target="_newtab" href="https://dev.to/knnyczr"><FontAwesomeIcon icon={faDev} /></a>
        </div>
        <span>© Kenneth Cruz  {new Date().getFullYear()}</span>
    </footer>
  );
}
