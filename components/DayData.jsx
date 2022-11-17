import React from "react";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";

const ListItem = styled.li`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    transition: all 0.2s ease-in-out;
    font-size: 1.2rem;
    min-width: 70px;

    &:hover {
        background: rgba(255, 255, 255, 0.25);
    }
    > * {
        margin: 0;
    }
`;

const DayData = ({ day, code }) => {
    return (
        <ListItem>
            <p>{day}</p>
            <p>
                <WeatherIcon code={code} />
            </p>
        </ListItem>
    );
};

export default DayData;
