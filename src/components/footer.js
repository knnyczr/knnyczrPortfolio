import React from 'react';
import './scss/footer.scss'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faDev, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
    <footer>
        <div className="links">
            <a target="_blank" href="mailto:kenny@knnyczr.com"><FontAwesomeIcon icon={faInbox} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/kennycruzer/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a target="_blank" href="https://github.com/knnyczr"><FontAwesomeIcon icon={faGithub} /></a>
            <a target="_blank" href="http://instagram.com/knny.psd"><FontAwesomeIcon icon={faInstagram} /></a>
            <a target="_blank" href="https://twitter.com/knnyczr"><FontAwesomeIcon icon={faTwitter} /></a>
            <a target="_blank" href="https://dev.to/knnyczr"><FontAwesomeIcon icon={faDev} /></a>
        </div>
        <span>© Kenneth Cruz  {new Date().getFullYear()}</span>
    </footer>
  );
}
