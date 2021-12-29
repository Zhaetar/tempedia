import { TemTemApiTem } from "@maael/temtem-types";
import { Input } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import TemtemList from "../../components/TemtemList";
import "./styles.css";

const { Search } = Input;

const ListPage: React.FC = () => {
  const [data, setData] = useState<Partial<TemTemApiTem[]>>([]);
  const [filter, setFilter] = useState<string>("");
  const api = "https://temtem-api.mael.tech";

  useEffect(() => {
    fetch(api + "/api/temtems")
      .then((response) => response.json())
      .then((responseJSON) => setTemtemList(responseJSON));
  }, [filter]);

  const setTemtemList = (rawData: TemTemApiTem[]) => {
    const filteredTems = rawData.filter((temtem: TemTemApiTem) =>
      temtem.name.toLowerCase().includes(filter.toLowerCase())
    );

    setData(filteredTems);
  };

  return (
    <div className="temtem-list-container">
      <Search
        className="temtem-list-search"
        placeholder="Search for a temtem"
        enterButton
        allowClear
        onSearch={setFilter}
        style={{ width: 304 }}
      />
      <TemtemList list={data} />
    </div>
  );
};

export default ListPage;
