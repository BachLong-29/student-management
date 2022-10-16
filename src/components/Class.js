import React from 'react'
import { Item } from 'semantic-ui-react'

const Class = () => {
    const classRoom = [
        {
            id: 1,
            className: 'A',
            info: '',
            fee: {
                price: 99,
                currency: '$',
                duration: '1 month'
                
            }
        },
        {
            id: 2,
            className: 'B',
            info: '',
            fee: {
                price: 199,
                currency: '$',
                duration: '1 month'
            }
        },
        {
            id: 3,
            className: 'C',
            info: '',
            fee: {
                price: 49,
                currency: '$',
                duration: '1 month'
            }
        }
    ]
  return (
    <>
    <Item.Group divided>
        {classRoom.map((item) => {
            return (
                <>
                    <Item>
                        <Item.Image size='tiny' src='https://play-lh.googleusercontent.com/w0s3au7cWptVf648ChCUP7sW6uzdwGFTSTenE178Tz87K_w1P1sFwI6h1CLZUlC2Ug' />
                        <Item.Content header={item.className} description={item.info} meta={`${item.fee.currency}${item.fee.price} ${item.fee.duration}`}/>
                    </Item>
                </>
            );
        })}
       
    </Item.Group>
    </>
  )
}

export default Class