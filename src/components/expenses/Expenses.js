import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../../styles/layout';
import { useGlobalContext } from '../../context/GlobalContext';
import Form from '../form/Form';
import IncomeItem from '../incomes/IncomeItem';
import ExpenseForm from '../form/ExpenseForm';

function Expenses() {

    const { addExpense, getExpenses, expenses, deleteExpense, totalExpense, } = useGlobalContext()

    useEffect(() => {
        getExpenses()
    }, [])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                    <h2 className='totla-income'>Total Expense: <span>${totalExpense()}</span></h2>
                <div className='income-content'>
                    <div className='form-container'>
                        <ExpenseForm/>
                    </div>
                    <div className='incomes'>
                        {expenses.map((expense) => {
                            const { _id, title, amount, date, category, description } = expense;

                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={'expense'}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`

    display: flex;
    overflow: auto;

    .totla-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: .5rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;

        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .income-content{
        display: flex;
        gap: 2rem;

        .incomes{
            flex: 1;
        }
    }

`;

export default Expenses