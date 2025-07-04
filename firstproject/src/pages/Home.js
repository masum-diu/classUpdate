import React from "react";
import HomeComponents from "../components/HomeComponents";
function Home() {
  return (
    <div>
      <HomeComponents
        title={"Welcome to Home page React js apps"}
        description={"Home page of React js apps"}
      />
      <HomeComponents
        title={"Welcome to body area page React js apps"}
        description={"Home page of React js apps"}
      />
    </div>
  );
}

export default Home;
