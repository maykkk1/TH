import React, { useState } from "react";
import Nav from "../../component/Home/Nav/Nav";
import UserHUD from "../../component/Home/UserHUD/userHUD";
import "./style.css";

const HomePage = () => {
  const [HomeComponent, setHomeComponent] = useState(<UserHUD />)

  return (
    <div className="HomePage">
      <div className="HomePage_container">
        <div className="Nav">
          <Nav setComponent={setHomeComponent} />
        </div>
        <div className="HomeComponentsWrapper">
          {HomeComponent}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
