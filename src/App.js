import React, { useMemo, useState } from 'react'
import { styled } from 'styled-components'
import bg from './images/bg.jpeg'
import { MainLayout } from './styles/layout'
import Orb from './components/orb/Orb'
import Navigation from './components/navigation/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import Income from './components/incomes/Income'
import Expenses from './components/expenses/Expenses'
import { useGlobalContext } from './context/GlobalContext'

function App() {

    const [active, setActive] = useState(1)

    const global = useGlobalContext()
    console.log(global)

    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard />
            case 2:
                return <Dashboard />
            case 3:
                return <Income />
            case 4:
                return <Expenses />
            default:
                return <Dashboard />
        }
    }

    const orbMemo = useMemo(() => {
        return <Orb />
    }, [])

    return (
        <AppStyled bg={bg} className='App'>
            {orbMemo}
            <MainLayout>
                <Navigation active={active} setActive={setActive} />
                <main>
                    {displayData()}
                </main>
            </MainLayout>
        </AppStyled>
    )
}

const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position:relative;
background-repeat: no-repeat;
background-size: cover;

main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        width: 0px;
    }
}
`

export default App