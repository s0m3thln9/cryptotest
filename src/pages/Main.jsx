import React, { useContext } from 'react'
import Card from '../components/Card/Card.jsx'
import styles from './styles.module.css'
import CoinsList from '../components/CoinsList/CoinsList.jsx'
import FilterBlock from '../components/FilterBlock/FilterBlock.jsx'
import { CoinsContext } from '../context/coinsContext.jsx'

function Main({ setFilteredCoins, balance, setBalance }) {
	const coinsContext = useContext(CoinsContext)
	const { coins } = coinsContext
	// function filterExpensiveCoins() {
	// 	return filteredCoins.filter(coin => coin.price > 1000)
	// }
	// const expansiveCoins = filterExpensiveCoins()
	// const expansiveCoins = useMemo(() => filterExpensiveCoins(), [filteredCoins])
	return (
		<main className={styles.main}>
			<Card balance={balance} setBalance={setBalance} />
			<FilterBlock setFilteredCoins={setFilteredCoins} />
			{coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
		</main>
	)
}

export default Main