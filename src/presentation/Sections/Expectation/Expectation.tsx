import React from 'react';


import {Expectations} from './ExpectationData'
import ExpectationCard from './Card/ExpectationCard';
const Expectation = () => {
    
    return (
        <div className='mt-4 flex flex-wrap justify-center  w-full gap-6 items-center py-2'>
            {Expectations.map((espect, index) => (
                <ExpectationCard 
                    key={index} 
                    title={espect.title} 
                    overview={espect.description} 
                    image={espect.image}
                />
            ))}
        </div>
    )
}

export default Expectation;