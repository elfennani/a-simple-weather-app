import { WbCloudy } from "@mui/icons-material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MaterialDesignIcons from "material-design-icons";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import CitySelect from "../components/CitySelect";
import { Credits } from "../components/Credit";
import CurrentData from "../components/CurrentData";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import WeekData from "../components/WeekData";
import cities from "../constants/cities";

const url = (lat, long) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode&current_weather=true&timezone=GMT&hourly=surface_pressure,relativehumidity_2m,temperature_2m,diffuse_radiation`;

export default function Home() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCity, setSelectedCity] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        (async () => {
            try {
                const res = await fetch(
                    url(
                        cities[selectedCity].laltitude,
                        cities[selectedCity].logtitude
                    )
                );
                setData(await res.json());
            } catch (error) {
                setError("Failed to get data!");
            } finally {
                setIsLoading(false);
            }
        })();
    }, [selectedCity]);

    if (error) {
        return (
            <div>
                <GlobalStyle />
                <p>{error}</p>
                <button onClick={() => setSelectedCity((s) => s)}>retry</button>
            </div>
        );
    }

    return (
        <div>
            <GlobalStyle bg={cities[selectedCity].image} />
            <Header
                data={data}
                isLoading={isLoading}
                cityName={cities[selectedCity].name}
            />
            {data && (
                <WeekData
                    days={data.daily.time}
                    codes={data.daily.weathercode}
                />
            )}
            <CurrentData data={data} isLoading={isLoading} />
            <CitySelect onChange={setSelectedCity} current={selectedCity} />
            <Credits>By Nizar Elfennani</Credits>
        </div>
    );
}
