import React from 'react'

// components
import FilterButton from '../FilterButton'

// assets
import { authorAsset } from '../../static/assets/authorAsset'


const SelectAuthorFilter = (props) => {
  const { select, onToggle } = props

  return (
    <div className="SelectAuthorFilter">
      <h3>SelectAuthor</h3>

      <FilterButton
        label='ALL'
        data={0}
        isToggle={select === 0}
        onToggle={onToggle}
      />

      {authorAsset.map(c => (
        <FilterButton
          key={c.id}
          data={c.id}
          label={c.name}
          isToggle={select === c.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default SelectAuthorFilter
