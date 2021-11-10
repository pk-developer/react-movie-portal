import React from "react";

const NoRecordFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={{textAlign: 'center'}}>No Record Found</h1>
    </div>
  );
};

export default NoRecordFound;

const styles = {
  container: {
    width: "100%",
    height: "calc(100vh - 100px)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};
