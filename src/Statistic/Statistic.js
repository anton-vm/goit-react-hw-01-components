import React from "react";
import StatisticCard from "./StatisticCard";
import PropTypes from 'prop-types'


import { StatSection, StatTitle, StatList } from "./Statistic.styled";

const Statistic = ({ data, title }) => {
  return (
    <StatSection>
      <StatTitle>{title}</StatTitle>
      <StatList>
        {data.map((el) => {
          return (
            <StatisticCard
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          );
        })}
      </StatList>
    </StatSection>
  );
  Statistic.propTypes ={
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
    title: PropTypes.string,
  };


};

export default Statistic;
