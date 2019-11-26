import React from 'react'
import DictList from './DictList'

const Phrases = props => {
  return (
    <>
      <h3>Here's Some Common Phrases For You</h3>
      <DictList
        items={props.dictionary.filter(item => {
          return item.POS === 'ph'
        })}
      />
    </>
  )
}

export default Phrases
