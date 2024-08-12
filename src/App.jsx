import Header from './components/Header/Header.jsx'
import Main from './pages/Main.jsx'
import { useCallback, useEffect, useState } from 'react'
import { getCoins } from './api/api.js'
import { CoinsContext } from './context/coinsContext.jsx'

function App() {
	const [balance, setBalance] = useState(50000)
	const [coins, setCoins] = useState([])
	const [filteredCoins, setFilteredCoins] = useState([])

	useEffect(() => {
		async function fetchData() {
			const data = await getCoins()
			setCoins(data.coins)
			setFilteredCoins(data.coins)
		}

		fetchData()
	}, [])

	const addBalance = useCallback(() => {
		setBalance(prev => prev + 1000)
	}, [])

	return (
		<>
			<CoinsContext.Provider value={{ coins, filteredCoins }}>
				<Header />
				<Main setFilteredCoins={setFilteredCoins} balance={balance} setBalance={addBalance} />
			</CoinsContext.Provider>
		</>
	)
}

export default App
