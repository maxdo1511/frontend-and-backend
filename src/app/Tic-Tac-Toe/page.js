'use client'

import {useState} from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState(null);
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([]);
    const [winner, setWinner] = useState(null);

    function startGame() {
        setBoard(Array(9).fill(" "));
        setXIsNext(true);
        setHistory({
            player1: "Игрок 1",
            player2: "Игрок 2",
            boards: []
        });
        setWinner(null);
    }

    function handleClick(index) {
        const newBoard = updateBoard(index);
        updateHistory(newBoard);
        checkWinner(newBoard);
    }

    function updateBoard(index) {
        const newBoard = board.slice();
        newBoard[index] = xIsNext ? "X" : "O";
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        return newBoard
    }

    function updateHistory(newBoard) {
        const newHistory = history.boards.slice();
        newHistory.push(newBoard);
        setHistory({...history, boards: newHistory});
    }

    function checkWinner(newBoard) {
        const newWinner = calculateWinner(newBoard);
        if (newWinner !== "") {
            console.log("winner:" + newWinner)
            setWinner(newWinner);
        }
    }

    function checkWherePlayerGo(index) {
        const nowBoard = history.boards[index];
        if (index === 0) {
            return nowBoard.indexOf("X")
        }
        const prevBoard = history.boards[index - 1];
        for (let i = 0; i < 9; i++) {
            if (nowBoard[i] !== prevBoard[i]) {
                return i;
            }
        }
    }

    console.log(history)

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                if (squares[a] === "X") {
                    return history.player1;
                } else if (squares[a] === "O") {
                    return history.player2;
                }
            }
        }
        if (history.boards.length === 8) {
            return "Ничья";
        }
        return "";
    }

    const Square = ({index, value}) => {
        return (
            <>
                <div className={"bg-gray-200 border-2 border-gray-400 rounded hover:bg-gray-300 flex items-center justify-center h-24 w-24"}>
                    <button
                        className={"w-full h-full text-center text-5xl font-bold"}
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </button>
                </div>
            </>
        )
    }

    const History = () => {
        if (!history.boards) {
            return (
                <></>
            )
        }
        return (
            <>
                <div className={"flex flex-col gap-2 justify-center items-center"}>
                    История ходов:
                    {
                        history.boards.map((value, index) => (
                            <div key={index}>
                                {
                                    index % 2 === 0 ?
                                        <p>{"Игрок 1 -> " + checkWherePlayerGo(index)}</p>
                                        :
                                        <p>{"Игрок 2 -> " + checkWherePlayerGo(index)}</p>
                                }
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }

    const PlayField = () => {
        return (
            <>
                <div className={""}>
                    <div className={"grid grid-cols-3 grid-rows-3 border-2 border-gray-400 rounded justify-items-center"}>
                        {
                            board.map((value, index) => (
                                <Square key={index} index={index} value={value}/>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="flex flex-col gap-2 justify-center items-center">
                <p className={"w-full text-center text-3xl"}>Крестики нолики</p>
                <br />
                {
                    board ?
                        <div className={"w-full h-full flex flex-col gap-4 justify-center"}>
                            {
                                winner !== null ?
                                    <div className={"w-full h-full flex flex-col gap-4 justify-center items-center"}>
                                        <p className={"w-full text-center text-3xl"}>Игра окончена!</p>
                                        <span>
                                            {
                                                winner !== "Ничья" &&
                                                    <p className={"w-full text-center text-3xl"}>Победил</p>
                                            }
                                            <p className={"w-full text-center text-3xl font-bold"}>{winner}</p>
                                        </span>
                                        <button className={"text-center text-3xl rounded bg-gray-300 hover:bg-gray-400 p-4"} onClick={startGame}>Начать заново</button>
                                    </div>
                                    :
                                    <p className={"w-full text-center text-3xl"}>Ходит {xIsNext ? history.player1 : history.player2}</p>
                            }
                            {
                                winner === null &&
                                    <div className={"w-full h-full flex flex-row gap-4 justify-center"}>
                                        <PlayField />
                                        <History />
                                    </div>
                            }
                        </div>
                        :
                        <button
                            className={"w-full text-center text-3xl"}
                            onClick={startGame}
                        >
                            Начать игру
                        </button>
                }
            </div>
        </>
    )
}