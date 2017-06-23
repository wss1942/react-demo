import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './counter.css';
import PropTypes from 'prop-types'

class Counter extends Component {

	render() {
		const { value, onIncrement, onDecrement } = this.props

		return (
			<div>
				<h1 className={style.textColorRed}>{value}</h1>
				<button onClick={onIncrement}>+</button>
				<button onClick={onDecrement}>-</button>
			</div>
		)
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}

export default Counter
