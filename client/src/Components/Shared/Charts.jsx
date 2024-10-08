import React from 'react'
import { Line , Doughnut } from "react-chartjs-2"
import { CategoryScale, Chart ,Tooltip,Filler,LinearScale,PointElement,LineElement,ArcElement,Legend, plugins, scales} from "chart.js"
import { last7Days } from '../../libs/features'
import { orange, purple } from '@mui/material/colors'
import { gray } from '../../utils/color'

Chart.register(CategoryScale,Tooltip,LinearScale,LineElement,PointElement,Filler,ArcElement,Legend)

const lineChartOptions = {
    responsive:true,
    plugins:{
        legend:{
            display:false
        },
        title:{
            display:false
        }
    },
    scales:{
        x:{
            grid:{
                display:false
            }
        },
        y:{
            beginAtZero:true,
            grid:{
                display:false
            }
        }
    }
}

const LineChart = ({ value = [] }) => {
    const data = {
        labels: last7Days(),
        datasets: [
        {
            label: 'Revenue',
            fill:true,
            data: value,
            backgroundColor: 'rgba(215, 222, 202, 0.2)',
            borderColor: 'rgba(175, 102,202, 1)',
            borderWidth: 1
        }
    ]
    }
  return <Line data={data} options={lineChartOptions} />
}

const doughnutChartOptions = {
    responsive:true,
    plugins:{
        legend:{
            display:false
        }
    },
    cutout:120
}

const DoughnutChart = ({ value=[] ,lab = []}) => {
    const data = {
        labels: lab,
        datasets: [
        {
            label: 'Total Chat vs Group Chat',
            data: value,
            backgroundColor: ["purple" , "orange"],
            borderColor: ["gray" , gray],
            hoverBackgroundColor: ["#C89AF7" , "#F7B167"],
            offset:40
        }
    ]
    }
  return <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOptions} />
}

export { LineChart , DoughnutChart }