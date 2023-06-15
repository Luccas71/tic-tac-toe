import React from "react";
import './styles.css';
import Player from "../../objects/Player";
import Card from "../../objects/Card";

const Hashtag = () => {
  return (
    <Card>
      {/* para passar um elemento para dentro de outro preciso dizer que eles são filhos desse elemento */}
      <ul className="hashtag">
        <li className="item"><Player player="x" /></li>
        <li className="item"><Player player="o" /></li>
        <li className="item"><Player player="x" /></li>

        <li className="item"><Player player="o" /></li>
        <li className="item"><Player player="x" /></li>
        <li className="item"><Player player="o" /></li>

        <li className="item"><Player player="x" /></li>
        <li className="item"><Player player="o" /></li>
        <li className="item"><Player player="x" /></li>
      </ul>
    </Card>
  );
};

export default Hashtag;
