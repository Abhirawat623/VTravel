import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer d-flex dir-col align-center">
      <p>Made by Abhishek Rawat</p>
      <div className="d-flex gap align-center gap-s">
        <a
          href="https://github.com/Abhirawat623"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://therightfit.netlify.app/assets/github-logo.png"
            alt="GitHub"
            className="icons-image"
          />
        </a>
        <a
          href="https://twitter.com/Abhishekrwt38"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://therightfit.netlify.app/assets/twitter.png"
            alt="Twitter"
            className="icons-image"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-rawat-598151240/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://therightfit.netlify.app/assets/linkedin.png"
            alt="LinkedIn"
            className="icons-image"
          />
        </a>
      </div>
    </footer>
  );
};
