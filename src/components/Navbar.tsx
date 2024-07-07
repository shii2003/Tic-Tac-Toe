import React from 'react';

const Navbar: React.FC = () => {

    return (
        <div className='h-14 sm:h-20 bg-rose-800 overflow-hidden  flex  justify-center items-center p-5 text-white  '>
            <p className='font-sans font-bold text-2xl sm:text-5xl'>

                Tic Tac Toe
            </p>
        </div>
    )
}
export default Navbar;