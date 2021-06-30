import React, { useEffect } from "react";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, []);

  return <>{location.pathname !== "/login" && <div>Header입니다</div>}</>;
};

export default Header;
