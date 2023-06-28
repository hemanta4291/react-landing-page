import React from 'react'
import { LoadingWrapper } from './styles/Loading.styled'
import LoadingPic from '../assets/images/ajax-loading.gif'

const LoadingText = ({height="",img_width="",font_size=""}) => {
  return (
    <LoadingWrapper height={height} font_size={font_size} img_width={img_width}>
        <div className='loading_img'>
            <img src={LoadingPic} alt="loading" />
        </div>
        <span className='loading_text'>Loading....</span>
    </LoadingWrapper>
  )
}

export default LoadingText