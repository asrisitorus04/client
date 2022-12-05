import React from "react";
import { CardsData } from "../../Data/Data";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              opd={card.opd}
              tanggal={card.tanggal}
              agenda={card.agenda}
              tempat={card.tempat}
              yang_menghadiri={card.yang_menghadiri}
              dokumentasi={card.dokumentasi}
              color={card.color}
              png={card.png}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
