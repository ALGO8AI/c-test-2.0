import React from "react";
import { algo, cairn } from "../../assets";
import Styles from "./Home.module.scss";
import ReactApexChart from "react-apexcharts";
import moment from "moment/moment";

function Home({ actveLink, currentTab, setCurrrentTab, logOut }) {
  return (
    <div className={Styles.Home_Container}>
      <div className={Styles.Header}>
        <div className={Styles.Left}>
          <img src={algo} alt="Algo" />
          <div className={Styles.Bar}></div>
          <h3>VISCOSITY PREDICTION</h3>
        </div>
        <div className={Styles.Centre}>
          {["Home", "CPF Details"].map((tab, index) => (
            <button
              onClick={() => setCurrrentTab(tab)}
              style={{
                backgroundColor: currentTab === tab ? "#509ee3" : "#fff",
                color: currentTab === tab ? "#fff" : "#509ee3",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={Styles.Right}>
          <img src={cairn} alt="Cairn" />
          <button onClick={logOut}>Logout</button>
        </div>
      </div>
      <div className={Styles.Body}>
        {currentTab === "Home" && (
          <div className={Styles.Tab1}>
            <div className={Styles.Tab1_Child1}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "area",
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: "smooth",
                  },
                  xaxis: {
                    type: "datetime",
                    categories: [
                      "2018-09-19T00:00:00.000Z",
                      "2018-09-19T01:30:00.000Z",
                      "2018-09-19T02:30:00.000Z",
                      "2018-09-19T03:30:00.000Z",
                      "2018-09-19T04:30:00.000Z",
                      "2018-09-19T05:30:00.000Z",
                      "2018-09-19T06:30:00.000Z",
                    ],
                  },
                  tooltip: {
                    x: {
                      format: "dd/MM/yy HH:mm",
                    },
                  },
                }}
                series={[
                  {
                    name: "series1",
                    data: [31, 40, 28, 51, 42, 109, 100],
                  },
                  {
                    name: "series2",
                    data: [11, 32, 45, 32, 34, 52, 41],
                  },
                ]}
                type="area"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className={Styles.Tab1_Child2}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "pie",
                  },
                  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 200,
                        },
                        legend: {
                          position: "bottom",
                        },
                      },
                    },
                  ],
                }}
                series={[44, 55, 13, 43, 22]}
                type="pie"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className={Styles.Tab1_Child3}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "rangeBar",
                  },
                  plotOptions: {
                    bar: {
                      horizontal: true,
                    },
                  },
                  dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                      var a = moment(val[0]);
                      var b = moment(val[1]);
                      var diff = b.diff(a, "days");
                      return diff + (diff > 1 ? " days" : " day");
                    },
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "light",
                      type: "vertical",
                      shadeIntensity: 0.25,
                      gradientToColors: undefined,
                      inverseColors: true,
                      opacityFrom: 1,
                      opacityTo: 1,
                      stops: [50, 0, 100, 100],
                    },
                  },
                  xaxis: {
                    type: "datetime",
                  },
                  legend: {
                    position: "top",
                  },
                }}
                series={[
                  {
                    name: "Bob",
                    data: [
                      {
                        x: "Design",
                        y: [
                          new Date("2019-03-05").getTime(),
                          new Date("2019-03-08").getTime(),
                        ],
                      },
                      {
                        x: "Code",
                        y: [
                          new Date("2019-03-08").getTime(),
                          new Date("2019-03-11").getTime(),
                        ],
                      },
                      {
                        x: "Test",
                        y: [
                          new Date("2019-03-11").getTime(),
                          new Date("2019-03-16").getTime(),
                        ],
                      },
                    ],
                  },
                  {
                    name: "Joe",
                    data: [
                      {
                        x: "Design",
                        y: [
                          new Date("2019-03-02").getTime(),
                          new Date("2019-03-05").getTime(),
                        ],
                      },
                      {
                        x: "Code",
                        y: [
                          new Date("2019-03-06").getTime(),
                          new Date("2019-03-09").getTime(),
                        ],
                      },
                      {
                        x: "Test",
                        y: [
                          new Date("2019-03-10").getTime(),
                          new Date("2019-03-19").getTime(),
                        ],
                      },
                    ],
                  },
                ]}
                type="rangeBar"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className={Styles.Tab1_Child4}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "bar",
                  },
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      columnWidth: "55%",
                      endingShape: "rounded",
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"],
                  },
                  xaxis: {
                    categories: [
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                    ],
                  },
                  yaxis: {
                    title: {
                      text: "$ (thousands)",
                    },
                  },
                  fill: {
                    opacity: 1,
                  },
                  tooltip: {
                    y: {
                      formatter: function (val) {
                        return "$ " + val + " thousands";
                      },
                    },
                  },
                }}
                series={[
                  {
                    name: "Net Profit",
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                  },
                  {
                    name: "Revenue",
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                  },
                  {
                    name: "Free Cash Flow",
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
                  },
                ]}
                type="bar"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className={Styles.Tab1_Child5}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "polarArea",
                  },
                  stroke: {
                    colors: ["#fff"],
                  },
                  fill: {
                    opacity: 0.8,
                  },
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 200,
                        },
                        legend: {
                          position: "bottom",
                        },
                      },
                    },
                  ],
                }}
                series={[14, 23, 21, 17, 15, 10, 12, 17, 21]}
                type="polarArea"
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
        )}
        {currentTab === "CPF Details" && (
          <div className={Styles.Tab2}>
            <div className={Styles.Tab1_Child1}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "area",
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: "smooth",
                  },
                  xaxis: {
                    type: "datetime",
                    categories: [
                      "2018-09-19T00:00:00.000Z",
                      "2018-09-19T01:30:00.000Z",
                      "2018-09-19T02:30:00.000Z",
                      "2018-09-19T03:30:00.000Z",
                      "2018-09-19T04:30:00.000Z",
                      "2018-09-19T05:30:00.000Z",
                      "2018-09-19T06:30:00.000Z",
                    ],
                  },
                  tooltip: {
                    x: {
                      format: "dd/MM/yy HH:mm",
                    },
                  },
                }}
                series={[
                  {
                    name: "series1",
                    data: [31, 40, 28, 51, 42, 109, 100],
                  },
                  {
                    name: "series2",
                    data: [11, 32, 45, 32, 34, 52, 41],
                  },
                ]}
                type="area"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className={Styles.Tab1_Child2}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "pie",
                  },
                  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 200,
                        },
                        legend: {
                          position: "bottom",
                        },
                      },
                    },
                  ],
                }}
                series={[44, 55, 13, 43, 22]}
                type="pie"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className={Styles.Tab1_Child3}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "rangeBar",
                  },
                  plotOptions: {
                    bar: {
                      horizontal: true,
                    },
                  },
                  dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                      var a = moment(val[0]);
                      var b = moment(val[1]);
                      var diff = b.diff(a, "days");
                      return diff + (diff > 1 ? " days" : " day");
                    },
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      shade: "light",
                      type: "vertical",
                      shadeIntensity: 0.25,
                      gradientToColors: undefined,
                      inverseColors: true,
                      opacityFrom: 1,
                      opacityTo: 1,
                      stops: [50, 0, 100, 100],
                    },
                  },
                  xaxis: {
                    type: "datetime",
                  },
                  legend: {
                    position: "top",
                  },
                }}
                series={[
                  {
                    name: "Bob",
                    data: [
                      {
                        x: "Design",
                        y: [
                          new Date("2019-03-05").getTime(),
                          new Date("2019-03-08").getTime(),
                        ],
                      },
                      {
                        x: "Code",
                        y: [
                          new Date("2019-03-08").getTime(),
                          new Date("2019-03-11").getTime(),
                        ],
                      },
                      {
                        x: "Test",
                        y: [
                          new Date("2019-03-11").getTime(),
                          new Date("2019-03-16").getTime(),
                        ],
                      },
                    ],
                  },
                  {
                    name: "Joe",
                    data: [
                      {
                        x: "Design",
                        y: [
                          new Date("2019-03-02").getTime(),
                          new Date("2019-03-05").getTime(),
                        ],
                      },
                      {
                        x: "Code",
                        y: [
                          new Date("2019-03-06").getTime(),
                          new Date("2019-03-09").getTime(),
                        ],
                      },
                      {
                        x: "Test",
                        y: [
                          new Date("2019-03-10").getTime(),
                          new Date("2019-03-19").getTime(),
                        ],
                      },
                    ],
                  },
                ]}
                type="rangeBar"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className={Styles.Tab1_Child4}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "bar",
                  },
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      columnWidth: "55%",
                      endingShape: "rounded",
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"],
                  },
                  xaxis: {
                    categories: [
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                    ],
                  },
                  yaxis: {
                    title: {
                      text: "$ (thousands)",
                    },
                  },
                  fill: {
                    opacity: 1,
                  },
                  tooltip: {
                    y: {
                      formatter: function (val) {
                        return "$ " + val + " thousands";
                      },
                    },
                  },
                }}
                series={[
                  {
                    name: "Net Profit",
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                  },
                  {
                    name: "Revenue",
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                  },
                  {
                    name: "Free Cash Flow",
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
                  },
                ]}
                type="bar"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className={Styles.Tab1_Child5}>
              <ReactApexChart
                options={{
                  chart: {
                    type: "polarArea",
                  },
                  stroke: {
                    colors: ["#fff"],
                  },
                  fill: {
                    opacity: 0.8,
                  },
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 200,
                        },
                        legend: {
                          position: "bottom",
                        },
                      },
                    },
                  ],
                }}
                series={[14, 23, 21, 17, 15, 10, 12, 17, 21]}
                type="polarArea"
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
        )}
        {/* <iframe
          src={actveLink[currentTab]}
          style={{ backgroundColor: "white" }}
          title="Cairn"
        ></iframe> */}
      </div>
    </div>
  );
}

export default Home;
