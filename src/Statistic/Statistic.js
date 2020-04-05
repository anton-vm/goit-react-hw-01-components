import React from "react";
import StatisticCard from "./StatisticCard";
import data from "./statistical-data.json";

import {
    StatSection,
    StatTitle,
    StatList
} from './Statistic.styled'

const Statistic = () => {
  return (
    <StatSection>
      <StatTitle>Upload stats</StatTitle>
      <StatList>
        {data.map((el) => {
          console.log(el);
          return <StatisticCard key={el.id} label={el.label} percentage={el.percentage} />;
        })}
      </StatList>
    </StatSection>
  );
};

export default Statistic;
