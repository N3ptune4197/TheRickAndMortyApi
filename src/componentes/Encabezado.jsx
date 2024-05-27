import React from "react";
import BackgroundPrincipal from './../assets/background-principal.svg';
import BackgroundPrincipalMobile from './../assets/background-principal-mobile.svg'

export default function Encabezado({title}) {
    return(
        <>
            <section className="h-[40vh] md:h-[85vh]">
                <div className="flex flex-col h-full items-center justify-center align-middle md:px-5 lg:px-3">
                    <h1 className="text-5xl md:text-8xl font-extrabold text-center mb-3 md:mb-5 justify-center">{title}</h1>
                    <p className="text-md md:text-lg font-medium px-10 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel eum voluptatum quidem ea ratione!</p>
                    <img src={BackgroundPrincipal} alt="" className="absolute w-screen bottom-0 none md:inherit -z-10"/>
                </div>
            </section>
        </>
    );
}