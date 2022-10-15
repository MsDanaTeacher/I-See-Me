import React from 'react'

export default function SearchBar({search, setSearch}) {
    function handleSearchChange(e){
        setSearch(e.target.value)
      }
  return (
    <div>
        <input type="text" placeholder="Search titles..." value={search} onChange={handleSearchChange}/>
        <img src={process.env.PUBLIC_URL+"images/free_icon_1_copy.svg"} height="20px" width="20px"/>
    </div>
  )
}
