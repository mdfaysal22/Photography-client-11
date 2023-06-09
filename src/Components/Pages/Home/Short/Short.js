import React from 'react';
import img from '../../../../Assets/aboutPhoto.jpg'

const Short = () => {
    return (
        <div className='py-10 bg-gray-50 px-2'>
            <div className='grid grid-cols-3 gap-10'>
            <div className='col-span-1'>
                <img src={img} alt="" />
            </div>
            <div className='col-span-2'>
                <h1 className='text-4xl font-semibold'>Life is an adventure. Capture every minute.</h1>
                <h2 className='text-2xl font-light'>I'm Kaylee, a street and nature photographer. My passion is taking photos of the most stunning places around the world.</h2>
                <div className='grid gap-5 grid-cols-2'>
                    <div className='col-span-1'>
                        <h2 className='text-md font-bold'>A Little About Me</h2>
                        <p>Nulla vitae elit libero, a pharetra augue. Dapuis mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus.</p>
                    </div>
                    <div className='col-span-1'>
                    <h2 className='text-md font-bold'>My Equipment</h2>
                    <ul>
                        <li>Canon Eos 5D Mark IV 24-105mm</li>
                        <li>Manfrotto Compact Tripod</li>
                        <li>DJI Ronin MX 3-Axis Gimbal Stabilizer</li>
                        <li>Wondlan Wer01 Slider Time Lapse</li>
                        <li>Canon EF100-400MM Lens</li>
                        <li>Nikon D5 24-70mm F2.8</li>
                        <li>Nikon Af-S 24Mm F/1.4G Ed Lens</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Short;