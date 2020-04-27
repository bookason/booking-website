import React from 'react'
import {useContext} from 'react'
import {Context} from '../context'
import Title from '../Components/Title'

const getUnique = (items, value) =>{
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context  = useContext(Context);

    const {
        
        handleChange,
        type, 
        capacity, 
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize, 
        breakfast, 
        pets} = context
        
    let types = getUnique(rooms, 'type')

    types =['all', ...types]
    types = types.map((item, index) =>{
        return <option key ={index} value ={item}> {item}</option>
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) =>{
        return <option key ={index} value ={item}> {item}</option>
    })

    return (
       <section className="filter-container">
           <Title title ="search rooms"/>

           <form className="filter-form">

               {/* Type of room */}
                <div className="form-group">
                    <label htmlFor="type">
                        room type
                    </label>

                    <select name="type" value ={type} id="type" className ="form-control" onChange ={handleChange}>
                        {types}
                    </select>
                </div>
                {/* End of type of room */}

                {/* Guest */}

                <div className="form-group">
                    <label htmlFor="capacity">
                        number of guest
                    </label>

                    <select name="capacity" value ={capacity} id="capacity" className ="form-control" onChange ={handleChange}>
                        {people}
                    </select>
                </div>

                {/* End of Guest */}

                {/* room price */}

                    <div className="form-group">
                        <label htmlFor="price">
                            room price ${price}
                        </label>
                        <input type="range" name ="price" min ={minPrice} max ={maxPrice} id ="price" value ={price} onChange ={handleChange} className="form-control-range"/>
                    </div>

                {/* end of room price */}

                {/* room size */}
                <div className="form-group">
                    <label htmlFor="size"> 
                    room size
                    </label>
                    <div className="size-inputs">
                        <input type="number" name ="minSize" id ="size" value ={minSize} className ="size-input" onChange ={handleChange}/>

                        <input type="number" name ="maxSize" id ="size" value ={maxSize} className ="size-input" onChange ={handleChange}/>
                    </div>
                </div>
                {/* end of room size */}

                {/* Extras */}

                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breakfast"
                            checked ={breakfast}
                            onChange ={handleChange}
                            />

                            <label htmlFor="breakfast">
                                breakfast 
                            </label>
                        </div>

                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets"
                            checked ={pets}
                            onChange ={handleChange}
                            />

                            <label htmlFor="pets">
                                pets
                            </label>
                        </div>
                    </div>

                {/*End of  Extras */}
           </form>
       </section>
    )
}
