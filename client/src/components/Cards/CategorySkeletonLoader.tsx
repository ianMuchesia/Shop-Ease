import React from 'react'

const CategorySkeletonLoader = () => {
  return (
<div className="c-skeleton-item showcase">
      <div className="c-skeleton-item__top">
        <div className="c-skeleton-item-square" />
      </div>
      <div className="c-skeleton-item__center">
        <h3>
          <div className="category-skeleton-line" />
          <div className="category-skeleton-line" />
        </h3>
      </div>
      <div className="c-skeleton-item__bottom">
        <div className="category-skeleton-line" />
        <div className="category-skeleton-line" />
      </div>
      <div className="c-skeleton-item__add">
        <div className="category-skeleton-square" />
      </div>
    </div>
  )
}

export default CategorySkeletonLoader