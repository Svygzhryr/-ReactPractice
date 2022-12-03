import React from 'react'

export default function MySelect({options, defaultValue, value, onChange}) {
  return (
    <select style={{backgroundColor: 'rgb(22, 22, 22)', border: 'none', color: 'white'}} value={value} onChange={event => onChange(event.target.value)}>
        <option style={{color:'grb(230, 230, 230)'}} disabled value="">{defaultValue}</option>
        {options.map(option => 
            <option style={{color: 'grb(230, 230, 230)'}} key={option.value} value={option.value}>
                {option.name}
            </option>
        )}
    </select>
  )
}
