import React from 'react'
import DictItem from './DictItem'

const DictList = props => {
  return (
    <div>
      {props.items.map((item, index) => {
        return <DictItem key={index} content={item} />
      })}
    </div>
  )
}

export default DictList
