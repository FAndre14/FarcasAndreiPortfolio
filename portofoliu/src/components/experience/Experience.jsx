import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import ReactToolTip from 'react-tooltip';
import "./experience.css";

const chartData = [
    {title: "Frontend", key:"HTML", value: 10, color: "#23395B"},
    {title: "Frontend", key:"EJS", value: 10, color: "#22223B"},
    {title: "Backend", key:"JS", value: 10, color: "#2B303A"},
    {title: "Backend", key:"Node.js", value: 10, color: "#22223B"},
    {title: "Backend", key:"Express", value: 10, color: "#22223B"},
    {title: "Backend", key:"React", value: 10, color: "#22223B"}
]

const Experience = () => {
    const [hovered, setHovered] = useState(null);
  return (
    <section id='experience'>
        <h2>My Experience</h2>
        <div className="container container__experience">
            <div className="container__frontend">
                <h1>Frontend Tehnology</h1>
                <h3>{typeof hovered === "number" && chartData[hovered].title === "Frontend" ? chartData[hovered].key : "Hover over chart"} </h3>
            </div>

            <div className="chartpie__graphic" data-tip data-for="chart">
                <PieChart
                data={chartData}
                onMouseOver = { (_, segmentIndex) => { setHovered(segmentIndex)}}
                onMouseOut = { () => { setHovered(null)}}
                segmentsStyle={{ transition: 'all 400ms ease', cursor: 'pointer'}}
                segmentsShift={(index) => (index === hovered ? 6 : 1)}
                label={({ dataEntry }) => dataEntry.key}
                radius= {40}
                labelStyle = {(index) => ({
                    fill: `${ index === hovered ? "var(--color-light)" : "#4dff5c"}`,
                    pointerEvents: "none",
                  })}
                className="chart"
                />

                <ReactToolTip id='chart'
                getContent={() =>
                    typeof hovered === 'number' ? `${chartData[hovered].key}` : null
                }
                clickable={false}
                className='chartpie__tooltip'
                />
            </div>

            <div className="container__backend">
                <h1>Backend Tehnology</h1>
                <h3>{typeof hovered === "number" && chartData[hovered].title === "Backend" ? chartData[hovered].key : "Hover over chart"} </h3>
            </div>
        </div>
    </section>
  )
}

export default Experience;
