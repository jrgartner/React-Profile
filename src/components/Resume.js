const Resume = () => {
  const styles = {
    resume: {
      "max-width": "90%",
      "max-height": "fit-content",
      "margin-top": "20px",
    },
  };
  return (
    <div>
      <header>
        <h1 className="orange">Resume</h1>
        <h2>CLICK THE IMAGE TO DOWNLOAD PDF</h2>
      </header>
      <div>
        <a
          href="https://drive.google.com/file/d/1tjTZjn-OhKa4CGaRuOb9U2FZX8SNbHpn/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../images/resumeGartner.png")}
            alt="Resume"
            style={styles.resume}
          />
        </a>
      </div>
    </div>
  );
};

export default Resume;
