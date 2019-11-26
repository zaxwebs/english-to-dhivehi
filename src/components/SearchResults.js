import React, { useContext } from 'react'
import DictList from './DictList'
import Context from '../Context'

const SearchResults = ({ term, dictionary }) => {
	const { swapped } = useContext(Context)

	const getResults = () => {
		return dictionary
			.filter(item => {
				if (swapped) {
					return item.dhivehi.some(element =>
						element.toLowerCase().startsWith(term.toLowerCase())
					)
				} else {
					return item.english.toLowerCase().startsWith(term.toLowerCase())
				}
			})
			.slice(0, 20) //return first 20 results, saves nodes
	}

	if (!term) {
		return false
	} else {
		const results = getResults()
		if (results[0]) {
			return (
				<>
					<h3>Here's What We Found For You</h3>
					<DictList items={results} />
				</>
			)
		} else {
			return (
				<>
					<h3>Oops, We Couldn't Find Anything</h3>
					<div className="box">
						<p>
							Looks like we might not have any translation for that at the
							moment.
						</p>
					</div>
				</>
			)
		}
	}
}

export default SearchResults
