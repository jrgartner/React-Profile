const styles = {
  container: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
  },
  portrait: {
    maxWidth: "100%",
    maxHeight: "fit-content",
  },
  bio: {
    fontFamily: "Raleway" || "sans-serif",
    lineHeight: "25px",
  },
};

const Body = () => {
  return (
    <div>
      <header>
        <h1 className="orange">Hello my name is Jillian Gartner</h1>
      </header>
      <div style={styles.container}>
        <div>
          <img
            alt="profile"
            src={require("../images/profile.png")}
            style={styles.portrait}
          />
        </div>
        <div>
          <p style={styles.bio}>
            My name is Jillian Gartner and I currently live and work in San
            Diego, California as a model based systems engineer for Booz Allen
            Hamilton. My educational background is in information technology.
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Body;
