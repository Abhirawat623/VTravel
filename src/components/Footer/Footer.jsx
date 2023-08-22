import "./Footer.css";

export const Footer = () => {
    return (
      <footer class="footer d-flex direction-column align-center">
        <p>
       Made by Abhishek Rawat
        </p>
        <div class="d-flex gap align-center padding-all-16">
          <a
            href="https://github.com/Abhirawat623"
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image"
              src="https://therightfit.netlify.app/assets/github-logo.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://twitter.com/Abhishekrwt38"
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image"
              src="https://therightfit.netlify.app/assets/twitter.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-rawat-598151240/"
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image"
              src="https://therightfit.netlify.app/assets/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </footer>
    );
};
  