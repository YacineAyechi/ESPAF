import React from "react";
import "./Branche.css";

import { MdCollectionsBookmark } from "react-icons/md";

function Branche() {
  return (
    <div className="branche-container">
      <div className="form-title">
        <h2>UNE FORMATION</h2>
        <h1>D'EXCELLENCE</h1>
      </div>
      <div className="cards">
        <div className="cards-container">
          <div className="card-1">
            <p>
              LICENCE FONDAMENTALE EN FINANCE
              <MdCollectionsBookmark className="icon-bookmark" />
            </p>
          </div>
          <div className="card-2">
            <p>
              LICENCE APPLIQUÉE EN ASSURANCES
              <MdCollectionsBookmark className="icon-bookmark" />
            </p>
          </div>
          <div className="card-3">
            <p>
              LICENCE FINANCE- ASSURANCE
              <MdCollectionsBookmark className="icon-bookmark" />
            </p>
          </div>
          <div className="card-3">
            <p>
              MASTER PROFESSIONNEL <br /> " MARI "
              <MdCollectionsBookmark className="icon-bookmark" />
            </p>
          </div>
          <div className="card-1">
            <p className="smaller">
              MASTER PROFESSIONNEL EN MANAGEMENT DU RISQUE
              <MdCollectionsBookmark className="icon-bookmark" />
            </p>
          </div>
          <div className="card-2 upper">
            <p className="smaller">
              MASTER ANALYSE FINANCIÈRE ET ÉVALUATION DES ENTREPRISES
              <MdCollectionsBookmark className="icon-bookmark" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branche;
