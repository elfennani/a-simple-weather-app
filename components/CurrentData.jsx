import { DataArrayRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const CurrentDataStyle = styled.ul`
    display: flex;
    gap: 32px;
    margin: 0;
    padding: 0;
    margin-top: 24px;

    > li {
        display: flex;
        gap: 8px;
        flex-direction: column;

        > h3 {
            font-size: 0.9rem;
            font-weight: 400;
            margin: 0;
            opacity: 0.66;
        }
        > p {
            font-size: 1.3rem;
            font-weight: 600;
            margin: 0;
        }
    }
`;

const CurrentData = ({ data, isLoading }) => {
    const dayNumber = new Date().getHours();

    return (
        <CurrentDataStyle>
            <li>
                <h3>Wind</h3>
                <p>{isLoading ? "--" : data.current_weather.windspeed} km/h</p>
            </li>
            <li>
                <h3>UV</h3>
                <p>
                    {isLoading
                        ? "--"
                        : data.hourly.diffuse_radiation[dayNumber]}
                </p>
            </li>

            <li>
                <h3>Humidity</h3>
                <p>
                    {isLoading
                        ? "--"
                        : data.hourly.relativehumidity_2m[dayNumber]}
                    %
                </p>
            </li>
            <li>
                <h3>Surface Pressure</h3>
                <p>
                    {isLoading ? "--" : data.hourly.surface_pressure[dayNumber]}{" "}
                    hPa
                </p>
            </li>
        </CurrentDataStyle>
    );
};

export default CurrentData;
