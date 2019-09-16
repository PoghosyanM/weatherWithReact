import React from 'react'
import { FaTemperatureHigh } from 'react-icons/fa'
import o from './oneDayDate.module.css'

function OneDayDate({dataDay}) {
    return (
        <>
            <div className={o.content}>
                <div className={o.description}>
                    <div>{dataDay.weather[0].main} </div>
                    <div> <img src={`http://openweathermap.org/img/w/${dataDay.weather[0].icon}.png`} alt="Weather Icon"/></div>
                </div>
                <div className={o.temp}>
                    <div>{<FaTemperatureHigh className={o.tempIcon} />}</div>
                    <div>{dataDay.main.temp}C</div>
                </div>
                <div className={o.pressure}>Pressure - {dataDay.main.pressure} mm Hg</div>
                <div className={o.wind}>
                    <div>Wind speed - {dataDay.wind.speed} m/s</div>
                    <div>Wind degress - {dataDay.wind.deg} deg </div>
                </div>
                <div className={o.country}>{dataDay.sys.country}</div>
                <div className={o.flag}><img src={`https://www.countryflags.io/${dataDay.sys.country}/flat/64.png`} alt="Country" width="75px"/></div>
            </div>
        </>
    )
}

export default OneDayDate
