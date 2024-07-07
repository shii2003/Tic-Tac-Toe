import React from 'react';

type BlockProps = {

    value: 'X' | 'O' | null;
    onClick?: () => void
}

const Block: React.FC<BlockProps> = (props) => {

    return (
        <div
            className={`h-20 w-20 sm:h-30 sm:w-30 md:h-50 md:w-50 bg-rose-800 text-white ${props.value === null ? 'hover:bg-rose-600 hover:scale-110  cursor-pointer' : 'cursor-not-allowed'} transition-transform duration-300 rounded-xl flex justify-center items-center  text-3xl md:text-5xl`}
            onClick={props.onClick}
        >

            {props.value === 'X' && <img src="x.svg" className='h-full w-full p-2' />}
            {props.value === 'O' && <img src="o.svg" className='h-full w-full p-2' />}
            {props.value === null && '\u00A0'}

        </div>
    )
}
export default Block;