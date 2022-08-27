import Footer from "./Footer";

const styles = {
  container: {
    backgroundColor: "#252525",
    width: "75%",
    padding: "20px 5px",
  },
  content: {
    height: "95%",
    marginBottom: "30px",
  },
};

const Content = (prop) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>{prop.content}</div>
      <Footer />
    </div>
  );
};

export default Content;
