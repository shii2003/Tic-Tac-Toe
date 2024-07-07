import React from 'react';

interface WinnerProps {
    winner: 'O' | 'X' | null;
}

const Winner: React.FC<WinnerProps> = ({ winner }) => {

    return (
        <div className='bg-rose-500   flex items-center justify-center px-5 py-2 text-white rounded-full text-2xl font-mono font-semibold bg-opacity-20 hover:bg-opacity-40  border-2 border-rose-700 sm:w-auto shadow-xl shadow-white'>
            Winner: {winner}
        </div>
    )
}
export default Winner;