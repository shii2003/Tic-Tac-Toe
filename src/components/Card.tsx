import React from 'react';

type Marker = 'X' | 'O' | null;

interface CardProps {
    selectedMarker: Marker;
    handleMarkerClick: (marker: Marker) => void;
    blockSize: number;
    handleBlockSize: (size: number) => void;
}

const Card: React.FC<CardProps> = ({ selectedMarker, handleMarkerClick, blockSize, handleBlockSize }) => {

    return (

        <div className='  font-mono p-4 mx-auto w-full max-w-md rounded-xl border-2 border-rose-700 bg-rose-500 bg-opacity-30 text-center text-xl font-bold text-white  '>

            <div className='flex justify-center items-center gap-5 mb-5'>
                <p> Choose Starting Character</p>
                <img
                    src='o.svg'
                    alt='O'
                    onClick={() => handleMarkerClick('O')}
                    className={` h-9 w-9 p-1  rounded-lg bg-rose-400 ${selectedMarker == null ? ` hover:bg-rose-300 hover:border-2 hover:border-whtie hover:scale-110 transition-transform transform cursor-pointer` : selectedMarker === 'O' ? 'border-4 border-white bg-rose-300 scale-110' : 'cursor-not-allowed'} `}


                />
                <img
                    src='x.svg'
                    alt='X'
                    onClick={() => handleMarkerClick('X')}
                    className={` h-9 w-9 p-1  rounded-lg bg-rose-400 ${selectedMarker == null ? ` hover:bg-rose-300 hover:border-2 hover:border-whtie hover:scale-110 transition-transform transform cursor-pointer` : selectedMarker === 'X' ? 'border-4 border-white bg-rose-300 scale-110' : 'cursor-not-allowed'} `}


                />

            </div>
            <div className='flex justify-center items-center gap-5'>
                <p>Choose the size of the grid :</p>
                <select
                    value={blockSize}
                    className='text-rose-700 bg-rose-200 rounded-lg p-1.5  border-2 border-rose-600 focus:ring-rose-500 focus:border-rose-500 '
                    onChange={(e) => handleBlockSize(Number(e.target.value))}
                >
                    {Array.from({ length: 5 }, (_, i) => i + 1).map(size => (
                        <option key={size}>{size}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default Card;