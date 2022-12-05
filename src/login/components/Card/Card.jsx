import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import Logo from "../../imgs/logo.png";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// CompactCard
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="CircularLogo">
        <div className="logo">
          <img src={Logo} alt="" />
          <span>OPD</span>
        </div>
      </div>
      <div className="detail">
        <Png />
        <span>{param.value}</span>
        <span>Agenda Tanggal xxxx</span>
      </div>
    </div>
  );
}

// ExpandedCard
function ExpandedCard({ param, setExpanded }) {
  return (
    <div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">Chart</div>
      <span>Omaewa</span>
    </div>
  );
}

export default Card;
