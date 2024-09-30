import react from 'react';


const Cards = ({school}) => {
    return (
        <div className="card">
           <div className='card-inner'>
           <div className='card-front'>
           <img src={school.img} alt="mascot" className='card-image' />
           </div>
            <div className="card-back">
                <h2><strong>{school.mascot}</strong></h2>
                <h3>{school.name}</h3>
                <p>{school.location}</p>
            </div>
           </div>
        </div>
    );
}

export default Cards