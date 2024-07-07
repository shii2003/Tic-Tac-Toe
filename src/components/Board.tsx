import React from 'react';
import Block from './Block';

type Marker = 'X' | 'O' | null;

interface BoardProps {
    blockSize: number;
    marker: Marker[];
    handleBlockClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ blockSize, marker, handleBlockClick }) => {

    return (

        <div className='p-3 flex flex-col items-center justify-center gap-3 mt-10 '>

            {Array(blockSize).fill(0).map((_, rowIndex) => (
                <div key={rowIndex} className='flex gap-3'>
                    {Array(blockSize).fill(0).map((_, colIndex) => {
                        const index = rowIndex * blockSize + colIndex;
                        return (
                            <Block
                                key={index}
                                value={marker[index]}
                                onClick={() => handleBlockClick(index)} />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}
export default Board;