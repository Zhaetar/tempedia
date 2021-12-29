import { TemTemApiTem } from "@maael/temtem-types";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import "./styles.css";

const { Meta } = Card;

const Details: React.FC = () => {
  const [data, setData] = useState<Partial<TemTemApiTem[]>>([]);
  const api = "https://temtem-api.mael.tech";

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    fetch(api + "/api/temtems", { headers })
      .then((response) => response.json())
      .then((responseJSON) => setData(responseJSON));
  }, []);

  const getTemtemImage = (temtem: TemTemApiTem) =>
    api + temtem.icon ? api + temtem.icon : temtem.portraitWikiUrl;

  return (
    <div className="tempedia">
      <Row gutter={16} className="temtem-row">
        {data.map((temtem) => (
          <Col className="temtem-row">
            <Card
              key={temtem?.number}
              className="tempedia-card"
              hoverable
              cover={
                <img
                  className="tempedia-card-image"
                  alt={temtem?.name}
                  src={getTemtemImage(temtem!)}
                />
              }
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
                    />{" "}
                    {type}
                  </div>
                ))}
              </Card.Grid>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Details;
