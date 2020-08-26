import React from 'react';
import './style.scss';
import icons from '../../../../resourse/icons';

const FileMessage = () => {
  return (
    <section className="fileMessageWrapper">
      <div className="fileMessageTop">
        <span className="fileName">SideBar.jsx</span>
        <span className="fileSize">Размер: 13 kb.</span>
      </div>
      <div className="fileMessageBottom">
        <button className="uploadFile">
          <span>{icons.upload}</span>
          Скачать
        </button>
      </div>
    </section>
  );
};

export default FileMessage;
