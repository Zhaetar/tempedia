import { TemTemApiTem } from "@maael/temtem-types";
import { Card, Col } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import TemtemImage from "../TemtemImage";
import "./styles.css";

type Props = {
  temtem?: TemTemApiTem;
};

const TemtemCard: React.FC<Props> = ({ temtem }) => {
  return (
    <Col className="temtem-row" key={temtem?.number}>
      <Link to={temtem!.name}>
        <Card
          key={temtem?.number}
          className="tempedia-card"
          hoverable
          cover={<TemtemImage temtem={temtem} />}
        >
          <Card.Grid
            hoverable={false}
            style={{ width: "100%", height: "40px", padding: "10px" }}
          >
            {temtem?.name}
          </Card.Grid>
          <Card.Grid
            hoverable={false}
            style={{ width: "100%", display: "flex", padding: "0px" }}
          >
            {temtem?.types.map((type) => (
              <div className={"temtem-type " + "temtem-type-" + type}>
                <img
                  className="temtem-type-image"
                  src={"/images/types/" + type + ".png"}
                />
              </div>
            ))}
          </Card.Grid>
        </Card>
      </Link>
    </Col>
  );
};

export default TemtemCard;
