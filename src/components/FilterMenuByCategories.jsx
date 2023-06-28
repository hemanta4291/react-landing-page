import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { categorySelected } from '../features/nfts/nftsSlice'
import Icons from './Icons'
import { FilterTabMenu } from './styles/DiscoverMore.styled'

const FilterMenuByCategories = () => {
    const dispatch = useDispatch()
    const { categories, selectedCategory } = useSelector((state) => state.ntfs);

    // const isSelected = selectedTags.includes(title) ? true : false;
    const selectCategoryHandler = (category) => {
        dispatch(categorySelected(category))
    }

    return (
        <FilterTabMenu>
            <ul>
                {
                    categories.length > 0 &&
                    categories.map((category) => (
                        <li key={category} onClick={() => selectCategoryHandler(category)} className={selectedCategory === category ? "active" : ''}>{category}</li>
                    ))
                }
            </ul>
            <div className='filter'>
                <span>{Icons.filter}</span>
                <span>All Filters</span>
            </div>
        </FilterTabMenu>
    )
}

export default FilterMenuByCategories