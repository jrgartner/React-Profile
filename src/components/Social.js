const Social = () => {
  const styles = {
    container: {
      color: "white",
    },
    icons: {
      display: "flex",
      gap: "5%",
    },
  };

  return (
    <div style={styles.container}>
      <p>SOCIAL</p>
      <div style={styles.icons}>
        <a
          href="https://www.linkedin.com/in/jillian-gartner-716345141"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/jrgartner" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
