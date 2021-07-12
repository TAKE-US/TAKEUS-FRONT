import React, { useEffect, useState } from "react";
import { DogCardContainer, PaginationNav, DogSearchNavigation } from "../../components";
//api
import { getPageDogs } from "lib/api/sample";

const DogPage = () => {
  const [dogs, setDogs] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await getPageDogs(pageNum);
      setDogs(data[0]);
      setTotalPage(data[1]);
    })();
  }, [pageNum]);

  return (
    <>
      <DogSearchNavigation />
      <div className="container-div">
        <DogCardContainer dogs={dogs} />
      </div>
      <PaginationNav pageNum={pageNum} setPageNum={setPageNum} totalPage={totalPage} />
    </>
  );
};

export default DogPage;
