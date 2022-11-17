import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
    display: flex;
    gap: 16px;
    align-items: center;
    margin-top: 60px;

    h1 {
        font-size: 4rem;
        margin: 0;
    }

    > div p {
        font-size: 1.8rem;
        opacity: 0.9;
        margin: 0;

        &:first-child {
            font-size: 1.1rem;
            opacity: 0.66;
        }
    }
`;

const Header = ({ data, isLoading, cityName }) => {
    const today = new Date();

    return (
        <HeaderStyle>
            <h1>
                {isLoading
                    ? "--"
                    : data.hourly.temperature_2m[new Date().getHours()]}
                °
            </h1>
            <div>
                <p>
                    {today.toLocaleDateString("en-US", { weekday: "short" })},{" "}
                    {today.getDate()}{" "}
                    {today.toLocaleDateString("en-US", { month: "short" })}
                </p>
                <p>{cityName}</p>
            </div>
        </HeaderStyle>
    );
};

export default Header;
