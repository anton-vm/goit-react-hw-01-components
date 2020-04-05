import React from 'react';
import PropTypes from 'prop-types'

import {
    StatItem,
    StatLabel,
    StatPercentage
} from './Statistic.styled'


const StatisticCard = ({label, percentage}) => {
    
    return (
    <StatItem>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}</StatPercentage>
    </StatItem>
    );

    StatisticCard.propTypes = {
        label: PropTypes.string,
        percentage: PropTypes.number,
    }
};

export default StatisticCard;