
  
    import React from 'react'
    
    export default function Hero() {
      return (
        <section id="hero" className="relative py-10 overflow-hidden">
            <div className="absolute inset-0 z-0 ">
                <img
                  src="https://i.ibb.co/dN7Pbvx/hazelnut-hero.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />

            </div>

            <div className=" h-screen text-gray-100 z-2">
                <div className='m-auto items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col h-full'>
                    <h1 className="text-4xl md:text-7xl font-extrabold  mb-6 leading-tight drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]">
                    Taptaze & Doğal Fındık,<br /> Bahçemizden Sofranıza
                </h1>
                <p className="text-3xl mb-8 max-w-prose font-semibold drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]">
                    Karadeniz’in verimli topraklarında yetişen fındıklarımızı hiçbir aracı olmadan size ulaştırıyoruz. %100 doğal, katkısız ve aroması zirvede.
                </p>
                <button href="#urun"
                  className="group inline-flex items-center justify-center
                            w-1/5 h-18 bg-amber-700 hover:bg-amber-600
                            text-gray-100 text-2xl font-bold py-3 px-8 text-shadow-lg shadow-lg
                            rounded-2xl transition-transform duration-300
                            transform hover:scale-105
                            hover:bg-[url('https://i.ibb.co/0jkP1Fkt/Varl-k-2.png')]
                            bg-center bg-no-repeat bg-contain z-2"
                >
                  <span className="mr-2">Satın Al</span>
                </button>


               
                </div>
            </div>
        </section>
      )
    }
    
