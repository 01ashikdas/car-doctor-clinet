import React from 'react';
import banner1 from '..//../../assets/images/banner/1.jpg'
import banner2 from '..//../../assets/images/banner/2.jpg'
import banner3 from '..//../../assets/images/banner/3.jpg'
import banner4 from '..//../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-lg" />

                <div className="absolute  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-12 py-48">
                    <div className='text-white space-y-7'>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>

                        <p>There Are Many Variations Of <br /> Passages of Avilable but The Majority <br /> Have Suffered Alteration in Some Form</p>
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-error mr-5 text-white'>Discover More</button>
                        <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-red-500 border-red-500">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-12 py-48">
                    <div className='text-white space-y-7'>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>

                        <p>There Are Many Variations Of <br /> Passages of Avilable but The Majority <br /> Have Suffered Alteration in Some Form</p>
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-error mr-5 text-white'>Discover More</button>
                        <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                    </div>

                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-red-500 border-red-500">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-12 py-48">
                    <div className='text-white space-y-7'>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>

                        <p>There Are Many Variations Of <br /> Passages of Avilable but The Majority <br /> Have Suffered Alteration in Some Form</p>
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-error mr-5 text-white'>Discover More</button>
                        <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                    </div>

                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-red-500 border-red-500">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-12 py-48">
                    <div className='text-white space-y-7'>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>

                        <p>There Are Many Variations Of <br /> Passages of Avilable but The Majority <br /> Have Suffered Alteration in Some Form</p>
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-error mr-5 text-white'>Discover More</button>
                        <button className='btn btn-outline btn-secondary'>Latest Projects</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-red-500 border-red-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;