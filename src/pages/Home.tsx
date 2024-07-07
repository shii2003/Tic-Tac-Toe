import React, { useEffect } from 'react';
import { useState } from "react";
import Reset from '../components/Reset';
import Card from '../components/Card';
import CurrentTurn from '../components/CurrentTurn';
import Board from '../components/Board';
import Winner from '../components/Winner';

const Home: React.FC = () => {

    type Marker = 'X' | 'O' | null;

    const [marker, setMarker] = useState<Marker[]>(Array(9).fill(null));
    const [currentTurn, setCurrentTurn] = useState<Marker>(null);
    const [selectedMarker, setSelectedMarker] = useState<Marker>(null);
    const [blockSize, setBlockSize] = useState<number>(3);
    const [winner, setWinner] = useState<Marker>(null);

    const handleMarkerClick = (marker: Marker) => {
        if (selectedMarker == null && currentTurn == null) {
            setSelectedMarker(marker);
            setCurrentTurn(marker);
        }

    }
    const handleBlockSize = (size: number) => {
        setBlockSize(size);
        setMarker(Array(size * size).fill(null));
        setWinner(null);
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
        setWinner(null);
    }

    const generateWinningCombinations = (size: number): number[][] => {
        const combinations: number[][] = [];

        //since there are only two diagonals decalring empty arrays to store the two diagonals
        const firstDiagonal: number[] = [];
        const secondDiagonal: number[] = [];

        for (let i = 0; i < size; i++) {
            const row: number[] = [];
            const col: number[] = [];
            for (let j = 0; j < size; j++) {
                //rows
                row.push(i * size + j);
                //columns
                col.push(j * size + i);
            }
            combinations.push(row)
            combinations.push(col)

            firstDiagonal.push((i * size) + i);
            secondDiagonal.push((i * size) + (size - 1 - i))
        }
        //pushing diagonals
        combinations.push(firstDiagonal);
        combinations.push(secondDiagonal);
        return combinations;
    }

    useEffect(() => {
        const winningCombinations = generateWinningCombinations(blockSize);

        const checkWinner = (markers: Marker[], currentMarker: Marker): boolean => {
            return winningCombinations.some(combination => combination.every(index => markers[index] === currentMarker)
            );
        }

        if (currentTurn != null) {
            if (checkWinner(marker, currentTurn === 'X' ? 'O' : 'X')) {
                setWinner(currentTurn === 'X' ? 'O' : 'X');
            }
        }
    }, [marker, blockSize, currentTurn]);
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
                {winner === null ? (
                    <CurrentTurn currentTurn={currentTurn} />
                ) : (
                    <Winner winner={winner} />
                )}
                <Reset onReset={resetGame} />
            </div>

        </div>
    )
}
export default Home;