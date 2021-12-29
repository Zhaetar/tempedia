import { TemTemApiTem } from "@maael/temtem-types";
import { Row } from "antd";
import "antd/dist/antd.css";
import React from "react";
import TemtemCard from "../TemtemCard";
import "./styles.css";

type Props = {
  list: Partial<TemTemApiTem[]>;
};

const TemtemList: React.FC<Props> = ({ list }) => {
  return (
    <Row gutter={16} className="temtem-row">
      {list!.map((temtem) => (
        <TemtemCard temtem={temtem} />
      ))}
    </Row>
  );
};

export default TemtemList;
