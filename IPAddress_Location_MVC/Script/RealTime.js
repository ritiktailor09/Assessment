﻿const rand = () => Math.random();
var x = [1, 2, 3, 4, 5];
const new_data = (trace) => Object.assign(trace, { y: x.map(rand) });

// add random data to three line traces
var data = [
    { mode: 'lines', line: { color: "#b55400" } },
    { mode: 'lines', line: { color: "#393e46" } },
    { mode: 'lines', line: { color: "#222831" } }
].map(new_data);

var layout = {
    title: 'Real-Time graph visualization',
    uirevision: 'true',
    xaxis: { autorange: true },
    yaxis: { autorange: true }
};

Plotly.react(graphDiv, data, layout);

var myPlot = document.getElementById('graphDiv');

var cnt = 0;
var interval = setInterval(function () {
    data = data.map(new_data);

    // user interation will mutate layout and set autorange to false
    // so we need to reset it to true
    layout.xaxis.autorange = true;
    layout.yaxis.autorange = true;

    // not changing uirevision will ensure that user interactions are unchanged
    // layout.uirevision = rand();

    Plotly.react(graphDiv, data, layout);
    if (cnt === 100) clearInterval(interval);
}, 2500);