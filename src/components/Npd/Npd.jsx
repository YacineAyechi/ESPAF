import React from "react";
import "./Npd.css";

function Npd() {
  return (
    <div className="npd-container">
      <div className="npd-dtitle">
        <h2>Pourquoi</h2>
        <h1>NOUS?</h1>
      </div>
      <div className="npd-content">
        <h3 className="npd-title">NOTRE PROGRAMME D'APPRENTISSAGE</h3>
        <div className="npd-para">
          <p>
            « ESPAF » est une école jeune, ambitieuse, en réseau avec plusieurs
            institutions financières.
          </p>
          <p>
            Crée pour répondre aux besoins croissants en formations des managers
            financiers de haut niveau, en particuliers pour le secteur des
            assurances.
          </p>
          <p>
            L’ESPAF incarne à nos yeux un très beau symbole de rapprochement
            entre le monde de la finance et le monde académique.
          </p>
          <p>
            Notre ambition est de former des managers ouverts, responsables,
            possédant les qualités nécessaires pour créer, entreprendre, et
            décider.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Npd;
