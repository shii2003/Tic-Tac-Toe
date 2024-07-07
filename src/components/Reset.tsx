import React from 'react';

type ResetProps = {
    onReset: () => void;
};

const Reset: React.FC<ResetProps> = ({ onReset }) => {

    return (
        <button
            className='bg-rose-500   flex items-center justify-center px-5 py-2 text-white rounded-full text-2xl font-mono font-semibold bg-opacity-20 hover:bg-opacity-40  border-2 border-rose-700 sm:w-auto'
            onClick={onReset}>
            Reset
        </button>
    )
}
export default Reset;