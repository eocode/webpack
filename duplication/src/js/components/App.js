import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";
import logo from "./../../images/platzi.png";
import video from "./../../video/que-es-core.mp4";

import './../../sass/sass.scss';
import './../../less/less.less';
import './../../stylus/stylus.styl';

function App() {
  const [loaderList, setLoaderList] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <p className="sass">Esto es sass</p>
      <p className="less">Esto es less</p>
      <p className="stylus">Esto es stylus</p>
      <p className="postcss">Esto es postcss</p>
      que linda aplicación hecha en React.js
      <p>
        <video src={video} controls poster={logo} width={360} alt="video" />
      </p>
      <p>
        <img src={logo} width={40} alt="logo" />
      </p>
      <ul>
        {loaderList.map(item => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>
        Mostrar lo aprendido hasta el momento
      </button>
    </div>
  );
}

export default App;
