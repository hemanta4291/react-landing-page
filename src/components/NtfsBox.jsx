import React from 'react'
import { DiscoverNtfsListItem } from './styles/DiscoverMore.styled'
import Icons from './Icons'
import { HourMinuteSecond } from '../utils/HourMinuteSecond'

const NtfsBox = ({item}) => {
    const {title,stock,sell,place_bid,thumbnail,bid_authors} = item
    const {hour,minute,second} = HourMinuteSecond()
  return (
        <DiscoverNtfsListItem>
            <div className='top_box'>
                <img className='top_large_img' alt='large' src={thumbnail} />
                <div className='subscribers'>
                    {
                        bid_authors.length > 0 && 
                        bid_authors.map((img,i)=>(
                            <img src={img} alt="bid" key={i}/>
                        ))
                    }
                     
                </div>
            </div>
            <div className='bottom'>
                <h5 className='title'>{title}</h5>
                <div className='middle'>
                    <div className='middle_left'>
                        <span>{Icons.ethereum2}</span>
                        <span>0.25 ETH</span>
                    </div>
                    <span className='middle_right'>{sell} of {stock}</span>
                </div>
                <div className='footer'>
                    <div className='f_date'><span>{hour}</span>h <span>{minute}</span>m <span>{second}</span>s <span>left</span></div>
                    <h6>{place_bid}</h6>
                </div>
            </div>
    </DiscoverNtfsListItem>
  )
}

export default NtfsBox