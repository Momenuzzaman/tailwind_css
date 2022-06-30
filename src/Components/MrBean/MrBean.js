import React from 'react';
import img from '../../img/download.jpg'

const MrBean = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-200 ">
            <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-3 sm:flex sm:items-center
            sm:py-4 sm:space-y-0
            sm:space-x-6">
                <img className="sm:mx-0 h-24  max-auto rounded-full ring-4 ring-green-300 sm:flex-shrink-0" src={img} alt="/" />
                <div className="space-y-4 text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold" >I am learning Code</p>
                        <p className="text-gray-500 font-medium">Prayer for me</p>
                    </div>
                    <button className="px-4 py-1 
                    border
                    border-purple-200 
                    rounded-full text-sm
                    text-purple-500 font-semibold">Visit now</button>
                </div>
            </div>
        </div>
    );
};

export default MrBean;