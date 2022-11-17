import {
    WbSunny,
    QuestionMarkIcon,
    WbCloudy,
    Water,
    Thunderstorm,
    AcUnit,
    Grain,
} from "@mui/icons-material";
import React from "react";

const WeatherIcon = ({ code }) => {
    if (code === 0) return <WbSunny />;
    if ([1, 2, 3].includes(code)) return <WbCloudy />; // cloudy
    if ([45, 48, 56, 57].includes(code)) return <Water />; // foggy
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return <Grain />; // rain
    if ([71, 73, 75, 77, 85, 86].includes(code)) return <AcUnit />; // snow
    if ([96, 99, 95].includes(code)) return <Thunderstorm />; // Thunder

    return <QuestionMarkIcon />;
};

export default WeatherIcon;
