import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { useGlobalContext } from '../../context/GlobalContext';
import { dateFormater } from '../../utils/dateFormat';

import { Line } from 'react-chartjs-2';
import { styled } from 'styled-components';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

function Charts() {
    const { incomes, expenses } = useGlobalContext()

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormater(date)
        }),

        datasets: [
            {
            label: 'Income',
            data: [
                ...incomes.map((income) => {
                    const { amount } = income;
                    return amount;
                })
            ],
            backgroundColor: 'green',
            tension: .2
        },
            {
            label: 'Expenses',
            data: [
                ...expenses.map((expense) => {
                    const { amount } = expense;
                    return amount;
                })
            ],
            backgroundColor: 'red',
            tension: .2
        },
    ]
    }

    return (
        <ChartStled>
            <Line data={data}/>
        </ChartStled>
    )
}

const ChartStled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
`

export default Charts