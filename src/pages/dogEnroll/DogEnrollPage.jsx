import React from "react";

import Input from 'components/atoms/input';

const DogEnrollPage = () => {
  return (
    <>
      <Input placeholder={'test'} description={'최대 10 글자'} max={10} childPos={'left'}>
        <div>dropdown slot</div>
      </Input>
    </>
  );
};

export default DogEnrollPage;
