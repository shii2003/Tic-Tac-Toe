import React from 'react';
import { useState } from "react";
import Reset from '../components/Reset';
import Card from '../components/Card';
import CurrentTurn from '../components/CurrentTurn';
import Board from '../components/Board';

const Home: React.FC = () => {

    type Marker = 'X' | 'O' | null;

    const [marker, setMarker] = useState<Marker[]>(Array(9).fill(null));
    const [currentTurn, setCurrentTurn] = useState<Marker>(null);
    const [selectedMarker, setSelectedMarker] = useState<Marker>(null);
    const [blockSize, setBlockSize] = useState<number>(3);

    const handleMarkerClick = (marker: Marker) => {
        if (selectedMarker == null && currentTurn == null) {
            setSelectedMarker(marker);
            setCurrentTurn(marker);
        }

    }
    const handleBlockSize = (size: number) => {
        setBlockSize(size);
        setMarker(Array(size * size).fill(null));
    }
    const handleBlockClick = (index: number) => {
        if (marker[index] === null && currentTurn != null) {
            const markerCopy = Array.from(marker)
            markerCopy[index] = currentTurn
            setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
            setMarker(markerCopy)
        }
    }

    const resetGame = () => {
        setMarker(Array(blockSize * blockSize).fill(null));
        setCurrentTurn(null);
        setSelectedMarker(null);
    }
    return (
        <div className='pt-16 sm:pt-24 flex-col justify-center items-center '>

            <Card
                selectedMarker={selectedMarker}
                handleMarkerClick={handleMarkerClick}
                blockSize={blockSize}
                handleBlockSize={handleBlockSize}
            />
            <Board
                blockSize={blockSize}
                marker={marker}
                handleBlockClick={handleBlockClick}
            />
            <div className='flex flex-col sm:flex-row   gap-5 items-center justify-center mt-7 w-full sm:w-auto'>

                <CurrentTurn currentTurn={currentTurn} />
                <Reset onReset={resetGame} />
            </div>

        </div>
    )
}
export default Home;