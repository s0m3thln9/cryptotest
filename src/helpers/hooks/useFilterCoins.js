import { useEffect, useState } from 'react'

export const useFilterCoins = (setFilteredCoins, coins) => {
	const [value, setValue] = useState('')
	useEffect(() => {
		const filteredCoins = coins.filter(coin => {
			return coin.name.toLowerCase().includes(value)
		})
		setFilteredCoins(filteredCoins)
	}, [value])
	return { setValue, value }
}