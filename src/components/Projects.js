const styles = {
  projects: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  flex: {
    display: "flex",
  },
  fit: {
    height: "0",
    maxHeight: "fit-content",
  },
  img: {
    maxWidth: "85%",
    maxHeight: "fit-content",
    border: "2px #f19b2c solid",
    transition: "all 0.5s ease-in-out",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    bottom: "25%",
    width: "fit-content",
    backgroundColor: "#f19b2c",
    textDecoration: "none",
    color: "white",
    padding: "1% 2%",
    zIndex: "1",
  },
  header: {
    margin: "0",
  },
};

const Project = () => {
  //create a project object and map over it instead of repeating the same code

  return (
    <div>
      <header>
        <h1 className="orange">Completed Projects</h1>
        <h2>Click on the Project to View</h2>
      </header>
      <div style={styles.projects}>
        <div style={styles.flex}>
          <div className="project-container">
            <a
              href="https://github.com/jrgartner/Team-Profile-Generator"
              target="_blank"
              rel="noreferrer"
              style={styles.fit}
            >
              <img
                src={require("../images/teamProfile.png")}
                alt="Team Profile Generator"
              />
              style={styles.img}
            </a>
            <div style={styles.title}>
              <h5 style={styles.header}>Team Profile Generator</h5>
              <h6 style={styles.header}>Bootstrap</h6>
            </div>
          </div>
          <div className="project-container">
            <a
              href="https://github.com/jrgartner/Crime-Watch"
              target="_blank"
              rel="noreferrer"
              style={styles.fit}
            >
              <img
                src={require("../images/crimeWatch.png")}
                alt="E-Commerce"
                style={styles.img}
              />
            </a>
            <div style={styles.title}>
              <h5 style={styles.header}>Crime Watch</h5>
              <h6 style={styles.header}>APIs</h6>
            </div>
          </div>
          <div className="project-container">
            <a
              href="https://github.com/jrgartner/Note-Taker"
              target="_blank"
              rel="noreferrer"
              style={styles.fit}
            >
              <img
                src={require("../images/noteTaker.png")}
                alt="Note Taker"
                style={styles.img}
              />
            </a>
            <div style={styles.title}>
              <h5 style={styles.header}>Note Taker</h5>
              <h6 style={styles.header}>Express.JS</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
