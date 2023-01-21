import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center text-white fw-400 py-3">
                Copyright © 2036 <a className="link-light" href="/#">Cyborg Gaming</a> Company. All
                rights reserved.
                <br />
                Design:{" "}
                <a
                  className="link-light"
                  href="/#"
                  target="_blank"
                  rel="noreferrer"
                  title="free CSS templates"
                >
                  TemplateMo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;