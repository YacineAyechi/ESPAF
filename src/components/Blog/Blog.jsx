import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div className="b-container">
      <div className="blog-ctn">
        <div className="blog-1">
          <img src="./blog-imgs/pfc.jpg" alt="" />
          <div className="blog-content">
            <h4>Programme formation continue</h4>
            <p>
              La mutuelle du savoir (ESPAF) organise une formation sur le thème
              " De la gestion du portefeuille d'assurance dans une optique de
              Risk Management, ou comment réussir une couverture optimale
              d'assurance innovante pour 2021"
            </p>
            <button>LIRE LA SUITE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
