import React from 'react';
// @ts-ignore
import One from './1.png';
// @ts-ignore
import Two from './2.jpg';
// @ts-ignore
import Three from './3.jpg';

const Attachment = () => {
  return (
    <div className="d-flex attachmentContent">
      <img className="attachmentItem" src={One} alt="" />
      <img className="attachmentItem" src={Two} alt="" />
      <img className="attachmentItem" src={Three} alt="" />
    </div>
  );
};

export default Attachment;
