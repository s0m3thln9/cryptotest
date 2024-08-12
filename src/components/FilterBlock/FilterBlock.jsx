import React, { useContext } from 'react'
import './styles.css'
import { CoinsContext } from '../../context/coinsContext.jsx'
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins.js'

function FilterBlock({ setFilteredCoins }) {
	const coinsContext = useContext(CoinsContext)
	const { coins } = coinsContext
	const { setValue, value } = useFilterCoins(setFilteredCoins, coins)
	return (
		<div className="filter-block">
			<input
				onChange={(e) => setValue(e.target.value)}
				value={value}
				className={'input'}
				type="text"
				placeholder="bitcoin"
			/>
		</div>
	)
}

export default React.memo(FilterBlock)