import React from 'react'
import './styles.css'
import { WithRuBalance } from '../../helpers/hoc/withRuBalance.jsx'

function Card({ balance, setBalance, ruBalance }) {
	return (
		<div className={'card'}>
			<div className={'card-block'}>
				<p>CRYPTO-FINANCE</p>
				<button onClick={setBalance}>Add Money</button>
			</div>
			<div className={'card-block'}>
				<p>DANIIL</p>
				<p>{balance} $</p>
			</div>
		</div>
	)
}

export default WithRuBalance(Card)