'use client'
import {useState} from 'react'
import SearchManufacturer from './SearchManufacturer'

const SeachBar = () => {
  const [manufacturer, setManufacturer] = useState("")
  const handleSearch = () => {

  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer}/>
      </div>
    </form>
  )
}

export default SeachBar
