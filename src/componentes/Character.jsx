import React from "react";

 const Character = ( {characters = []}) => {
    return(
        <>

            {
                characters.map((item, index) => (
                    <div key={index} className="card w-72 md:w-80 lg:w-80 xl:w-80  bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" className="w-58" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl md:text-3xl text-center">
                                {item.name}
                            </h2>
                            <p className="text-lg">Specie: {item.species}</p>
                            <div className="divider">TAGS</div>
                            <div className="card-actions justify-end">
                                <div className="badge badge-primary badge-md">{item.status}</div> 
                                <div className="badge badge-secondary">{item.gender}</div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    );
}

export default Character