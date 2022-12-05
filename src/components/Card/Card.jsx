import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
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
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
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
    </motion.div>
  );
}

// ExpandedCard
function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div>{param.tanggal}</div>
      <div>{param.agenda}</div>
      <div>{param.tempat}</div>
      <div>{param.yang_menghadiri}</div>
      <div>{param.dokumentasi}</div>
      <span>Omaewa</span>
    </motion.div>
  );
}

export default Card;
