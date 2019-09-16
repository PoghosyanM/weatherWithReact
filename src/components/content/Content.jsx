import React, { useState } from 'react'
import c from './content.module.css'
import DropList from './subContents/dropList/DropList';
import CommonList from './subContents/commonList/CommonList';
import OneDayDate from './subContents/oneDayDate/oneDayDate';

function Content({ data, dataDay }) {
    let [dayDate, setDayDate] = useState([]);
    let openItems = (item) => {
        setDayDate(item.dt_txt.split(" ")[0].split("-")[2])
    }
    return (
        <div>
            <div className={c.content}>
                {dataDay.weather && <OneDayDate dataDay={dataDay} />}
                <CommonList data={data} openItems={openItems} />
            </div>
                <DropList data={data} dayDate={dayDate} />
        </div>
    )
}

export default Content;
