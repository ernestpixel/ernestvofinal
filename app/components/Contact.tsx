'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faXTwitter,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <section id="Contact" className="w-full bg-black text-white px-6 md:px-12 py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Title */}
        <h2 className="text-5xl font-regular uppercase md:w-1/4">Contact</h2>

        {/* Right Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full md:w-3/4">
          {/* Email & Phone */}
          <div className="border border-white p-4 pt-2 pb-2 flex flex-col gap-4 w-full md:w-1/2">
            <a href="mailto:contact@ernestslach.com" className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} /> contact@ernestslach.com
            </a>
            <a href="tel:+40728567830" className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} /> +40 728 567 830
            </a>
          </div>

          {/* Social Icons */}
          <div className="border border-white p-4 flex flex-wrap items-center justify-center gap-4 text-xl w-full md:w-1/2">
            <a href="https://x.com" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://tiktok.com" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
