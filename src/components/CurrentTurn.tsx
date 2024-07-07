import React from 'react';

type Marker = 'X' | 'O' | null;

type CurrentTurnProps = {
    currentTurn: Marker;
};

const CurrentTurn: React.FC<CurrentTurnProps> = ({ currentTurn }) => {

    return (
        <div className=' bg-rose-500   flex items-center justify-center px-5 py-2 text-white rounded-full text-2xl font-mono font-semibold bg-opacity-20 hover:bg-opacity-40  border-2 border-rose-700  sm:w-auto'>
            <p> Current Turn: </p>

            <img
                className='h-8 w-8'
                src={currentTurn === 'X' ? 'x.svg' : currentTurn === 'O' ? 'o.svg' : 'dash.svg'}
            />

        </div>
    )
}
export default CurrentTurn;