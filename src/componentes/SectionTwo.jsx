import React from "react";


export default function SectionTwo({children}) {
    return(
            <section className="flex flex-col bg-blue-950 pt-5">

                <div className="join mt-16 justify-center mb-10">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">Página 1</button>
                    <button className="join-item btn">»</button>
                </div>

                <div className="grid p-18 md:p-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-7 justify-center items-center">
                    
                    {children}

                </div>



            </section>

    )
}