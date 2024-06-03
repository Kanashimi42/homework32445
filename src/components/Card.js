import React from 'react';
import imgFallout from '../img/Fallout.jpg'
import imgFallout3 from '../img/Fallout3.jpg'
import imgFallout4 from '../img/Fallout4.jpg'
const Products = [
    {
        img: imgFallout,
        title: 'Fallout',
        size: ["Standart","Gold"],
        price: 20,
        desc: "After being sent by the overseer of his vault to search for a new water purifying chip, the player discovers the horrors of post apocalyptic America, and the threat of the Master's Army."
    },
    {
        img: imgFallout3,
        title: 'Fallout 3',
        size: ["Standart","Gold"],
        price: 25,
        desc: "Centuries following nuclear war, a teen leaves the safety of an underground vault in order to find their father, who left in hopes of creating a water purifier."
    },
    {
        img: imgFallout4,
        title: 'Fallout 4',
        size: ["Standart","Gold"],
        price: 40,
        desc: "In the post-apocalyptic Boston, Massachusetts area, you play as the Sole Survivor of Vault 111, recently revived from centuries of forced cryostasis, determined to find your kidnapped son."
    }
];

function IsAddList(props) {
    return (
    <ul className='size'>
        {props.size.map((addInfoItem, index) => (
            <li className="size__item">{addInfoItem}</li>
        ))}
    </ul>
    )
}

function AddItem(index) {
    return (
    <div className='card-wrapper'>
        <div className='card'>
                <div className='card__img-wrapper'>
                    <img className='card__img' src={Products[index].img} alt={Products[index].title}/>
                </div>
                <div className='card__info'>
                    <h2 className='card__title'>{Products[index].title}</h2>
                    <div className='card__wrapper'>
                        <div className='card__item'>
                            <h4 className='card__details'>edition:</h4>
                            {IsAddList(Products[index])}
                        </div>
                        <div className='card__item'>
                            <h4 className='card__details'>price:</h4>
                            <span className='card__value'>{Products[index].price}$</span>
                        </div>
                        <div className='card__item'>
                            <h4 className='card__details'>description</h4>
                            <p className='card__desc'>
                            {Products[index].desc}
                            </p>
                        </div>
                    </div>
                    <button className='card__btn' type='submit'>buy</button>
                </div>
            </div>
    </div>
    )
  }

export class Card extends React.Component {
    render() {
        return (
            <div className='page'>
            {
                Products.map((item, index) => {
                    return AddItem(index)
                })
            }
            </div>
        )
    }
}