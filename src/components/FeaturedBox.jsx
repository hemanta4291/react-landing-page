import React from 'react'
import { ButtonExtraSmallOutline } from './styles/Buttons.styled'
import { FeturedInnerItem } from './styles/Featured.styled'

const FeaturedBox = ({ item }) => {
    const { title, author_name, author_pic, thumbnail, pictures, total_item } = item

    return (
        <FeturedInnerItem>
            <div className='content'>
                <div>
                    <img className='content_img' alt='content_img' src={thumbnail} />
                </div>
                <div>
                    {pictures?.map((img, i) => (
                        <div key={i}><img src={img} alt={"content" + 1} /></div>
                    ))}
                </div>
            </div>
            <div className='author'>
                <div>
                    <h5>{title}</h5>
                    <div className='author_profile'>
                        <img src={author_pic} alt="author" />
                        <h6>by {author_name}</h6>
                    </div>

                </div>
                <ButtonExtraSmallOutline>
                    Total {total_item} Items
                </ButtonExtraSmallOutline>
            </div>
        </FeturedInnerItem>
    )
}

export default FeaturedBox