import React, { useContext } from 'react'
import Context from '../Context'

const DictItem = props => {
	const { swapped } = useContext(Context)
	const english = (
		<>
			<span className="english">{props.content.english}</span>{' '}
			{props.content.POS && <span className="POS">{props.content.POS}</span>}
		</>
	)
	const dhivehi = (
		<div className="dhivehi">{props.content.dhivehi.join(', ')}</div>
	)
	return (
		<div className="dict-item box">
			<div className="top">{swapped ? dhivehi : english}</div>
			<div className="divider" />
			{swapped ? english : dhivehi}
		</div>
	)
}

export default DictItem
