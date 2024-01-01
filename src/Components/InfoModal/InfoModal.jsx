import React from "react"
import "./InfoModal.css"
function InfoModal({ setShowModal }) {
  return (
    <div className="info-modal">
      <div className="modal-container utility-glass">
        <div className="info-modal__window">
          <h2>Privacy Policy</h2>
          <hr />
          <p>
            <h4>Data Collection</h4>
            All information entered on this site is kept in the local storage of
            the user's(your) browser. None of this information is collected by
            the site owner, nor does it ever leave your computer. If the user
            were to clear their local storage all data enteted on the site would
            be gone.
            <h4>Cookies</h4>
            This website does not use cookies.
            <h4>GitHub Pages Service</h4>
            This website is hosted as a GitHub Pages website. GitHub may collect
            personal user information, such as visitor IP adresses, that is not
            accessible to the website creator(myself). See the{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Privacy Statement
            </a>{" "}
            for more details on the information GitHub may collect.
          </p>
          <span
            className="info-modal__close-btn utility-glass"
            onClick={() => setShowModal(false)}
          >
            close
          </span>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
