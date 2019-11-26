import React, { useState, useEffect, useContext } from 'react'
import './App.css'
import data from './data.json'
import Context from './Context'
import Phrases from './components/Phrases'
import SearchResults from './components/SearchResults'

const App = () => {
  const [dictionary, setDictionary] = useState([])
  const [input, setInput] = useState('')
  const { swapped, setSwapped } = useContext(Context)

  useEffect(() => {
    setDictionary(data.dictionary)
  }, [])

  const handleInput = e => {
    setInput(e.target.value)
  }

  const toggleSwapped = () => {
    setSwapped(!swapped)
  }

  return (
    <>
      <div className="header">
        <h1>{swapped ? 'Dhivehi to English' : 'English to Dhivehi'}</h1>
        <button onClick={toggleSwapped}>Swap Languages</button>
        <p>
          {swapped
            ? 'Instantly translate Dhivehi (the official language of Maldives) words and some common phrases to English'
            : 'Instantly translate English words and some common phrases to Dhivehi, the official language of Maldives.'}
        </p>
        <input
          type="text"
          placeholder={
            swapped ? 'Type a Dhivehi Word Here' : 'Type an English Word Here'
          }
          onChange={handleInput}
        />
      </div>
      <div className="body">
        <div className="container">
          <div className="col col-8">
            <SearchResults term={input} dictionary={dictionary} />
            <Phrases dictionary={dictionary} />
          </div>
          <div className="col col-4">
            <h3>About This App</h3>
            <div className="box">
              <p>
                This app lets you translate English words & some common phrases
                to Dhivehi (also referred to as Divehi) & vice-versa.
              </p>
              <p>
                With Dhivehi being the official language of Maldives, one of the
                most desired tourist destinations, we aim to serve both tourists
                and locals alike with our app in helping them communicate
                better.
              </p>
              <p>
                Hey, we are also the first ever English-Dhivehi translator app
                with a fast search-as-you-type feature and a collection of 5000
                entries and counting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
