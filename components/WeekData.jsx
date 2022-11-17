import React from "react";
import styled from "styled-components";
import DayData from "./DayData";

const WeekDataList = styled.ul`
    display: flex;
    list-style: none;
    gap: 16px;
    margin: 0;
    padding: 0;
    margin-top: 24px;
    position: relative;
    margin-left: -16px;
`;

const WeekData = ({ days, codes }) => {
    return (
        <WeekDataList>
            {days.map((day, index) => {
                const date = new Date(day);
                return (
                    <DayData
                        code={codes[index]}
                        day={date.toLocaleDateString("en-US", {
                            weekday: "short",
                        })}
                    />
                );
            })}
        </WeekDataList>
    );
};

export default WeekData;
