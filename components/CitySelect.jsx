import React from "react";
import styled from "styled-components";
import cities from "../constants/cities";

const CitySelectStyle = styled.div`
    position: absolute;
    top: 90px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Button = styled.button`
    font-size: ${(p) => (p.active ? 1.5 : 1)}em;
    font-weight: ${(p) => (p.active ? "bold" : "normal")};
    font-family: Outfit;
    background: transparent;
    border: none;
    color: ${(p) => (p.active ? "white" : "rgba(255,255,255,0.5)")};
    padding: 12px 32px;
    text-align: right;
    transition: all 0.3s ease-in-out;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.25));
        transition: all 0.3s ease-in-out;
        transform: translateX(${(p) => (p.active ? 0 : 100)}%);
    }
`;

const CitySelect = ({ onChange, current }) => {
    return (
        <CitySelectStyle>
            {cities.map((city, index) => (
                <Button
                    key={city.name}
                    active={index == current}
                    onClick={() => onChange(index)}
                >
                    {city.name}
                </Button>
            ))}
        </CitySelectStyle>
    );
};

export default CitySelect;
