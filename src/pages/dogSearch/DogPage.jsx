import React, { useEffect, useState } from "react";
import { DogCardContainer, PaginationNav, DogSearchNavigation } from "../../components";
//api
import { getDogs } from "lib/api/sample";

const DogPage = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getDogs();
      setDogs(data);
      console.log(data);
    })();
  }, []);

  return (
    <>
      <DogSearchNavigation />
      <div className="container-div">
        <DogCardContainer dogs={dogs} />
      </div>
      <PaginationNav />
    </>
  );
};

export default DogPage;
