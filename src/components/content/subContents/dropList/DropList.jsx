import React from 'react'
import d from './dropList.module.css'

function DropList({data,dayDate}) {
    return (
        <div className={d.dropdownData}>
            {
                    data.list && data.list.map(item => {
                        if (item.dt_txt.split(" ")[0].split("-")[2] === dayDate) {
                            return (
                                <div className={d.dropdownList} key={item.dt}>
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
        </div>
    )
}

export default DropList
