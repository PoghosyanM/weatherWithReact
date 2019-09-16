import React from 'react'
import c from './commonList.module.css'

function CommonList({data, openItems}) {
    return (
        <>
            {
                data.list && data.list.map(item => {
                    if (item.dt_txt.split(" ")[1].split(":")[0] === '21') {
                        return (
                                <div className={c.commonDay} 
                                    key={item.dt}
                                    onClick={() => openItems(item)} >
                                    <div> {item.dt_txt.split(" ")[0]} </div>
                                    <div> {item.weather[0].main}  </div>
                                    <div> <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="Weather Icon"/> </div>
                                    <div> Temperatue: {Math.round(item.main.temp) } C </div>
                                    <div> Pressure: {Math.round(item.main.pressure)} mm Hg </div>
                                    <div> Wind speed: {Math.round(item.wind.speed)} m/s </div>
                                    <div> Wind deg: {Math.round(item.wind.deg)} deg </div>
                                </div>
                        )
                    }
                })
            }
        </>
    )
}

export default CommonList
