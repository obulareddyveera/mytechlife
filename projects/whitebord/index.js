import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPalette, faClose, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

import MtlBadge from "../../components/badge";

function Board({ sideMenu, setSideMenu, breadcrumb }) {
    const canvasRef = React.useRef(null);
    const parentRef = React.useRef(null);
    const [ctx, setCtx] = useState({});
    const [draw, setDraw] = useState(0);
    const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
    const [drawing, setDrawing] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState("#000000");
    const [showColorPalette, setShowColorPalette] = useState(false)

    const navList = [
        {
            displayName: 'Whiteboard',
            link: 'whiteboard'
        }
    ]

    useEffect(() => {
        setSideMenu(false)
        breadcrumb.set(navList)
    }, [])

    useEffect(() => {
        console.log('--== apply redraw ', draw);
        setDraw(draw + 1)
    }, [sideMenu])

    useEffect(() => {
        if (canvasRef.current) {
            let canv = canvasRef.current;
            canv.width = parentRef.current.offsetWidth;
            canv.height = parentRef.current.offsetHeight;
            handlePen('#000000')
            let offset = canv.getBoundingClientRect();
            setCanvasOffset({ x: parseInt(offset.left), y: parseInt(offset.top) });
        }
    }, [ctx]);

    function handleMouseDown(e) {
        setDrawing(true);
        setPosition({
            x: parseInt(e.clientX - canvasOffset.x),
            y: parseInt(e.clientY - canvasOffset.y),
        });
    }
    function handleMouseUp() {
        setDrawing(false);
    }

    function handleMouseMove(e) {
        let mousex = e.clientX - canvasOffset.x;
        let mousey = e.clientY - canvasOffset.y;
        if (drawing) {
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(position.x, position.y);
            ctx.lineTo(mousex, mousey);
            ctx.stroke();
        }
        setPosition({ x: mousex, y: mousey });
    }

    function handleColorPalette() {
        setShowColorPalette(!showColorPalette)
    }

    function handleChange(pickerColor) {
        setColor(pickerColor.hex);
    }

    function handleTrash() {
        console.log('--== handleTrash ', canvasRef.current);
        ctx.clearRect(0, 0, parentRef.current.offsetWidth, parentRef.current.offsetHeight);
    }

    function handleEraser(color) {
        setColor(color);
        let canv = canvasRef.current;
        let canvCtx = canv.getContext("2d");
        canvCtx.lineJoin = "round";
        canvCtx.lineCap = "round";
        canvCtx.lineWidth = 50;
        setCtx(canvCtx);
    }
    function handlePen(color) {
        setColor(color);
        let canv = canvasRef.current;
        let canvCtx = canv.getContext("2d");
        canvCtx.lineJoin = "round";
        canvCtx.lineCap = "round";
        canvCtx.lineWidth = 5;
        setCtx(canvCtx);
    }

    return (
        <div className={`p-4 relative w-full h-fit overflow-hidden flex flex-col items-center justify-center`} ref={parentRef}>
            {
                draw && (
                    <>
                        <div className="flex justify-between w-full ml-3">
                            <div>
                                <button onClick={() => handlePen('#000000')} className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                                    <FontAwesomeIcon
                                        title="choose color"
                                        className="w-4 h-4 text-red-400"
                                        icon={faPen}
                                    />
                                </button>
                                <button onClick={() => handleEraser('#ffffff')} className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                                    <FontAwesomeIcon
                                        title="erase"
                                        icon={faEraser}
                                        className="w-4 h-4"
                                    />
                                </button>
                                <button onClick={() => handleColorPalette()} className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                                    <FontAwesomeIcon
                                        title="choose color"
                                        className="w-4 h-4 text-red-400"
                                        icon={faPalette}
                                    />
                                </button>
                            </div>
                            <div className="flex mr-2">
                                <button onClick={() => handleTrash()} className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                                    <FontAwesomeIcon
                                        title="choose color"
                                        className="w-4 h-4 text-red-800"
                                        icon={faTrash}
                                    />
                                </button>
                            </div>
                        </div>
                        <div>
                            {showColorPalette && (
                                <div className="absolute left-16 top-4 z-10 shadow-xl" onMouseLeave={() => setShowColorPalette(false)}>
                                    <div className="flex justify-end w-full">
                                        <button onClick={() => setShowColorPalette(false)} className="bg-transparent">
                                            <FontAwesomeIcon
                                                title="choose color"
                                                className="w-4 h-4 text-green-800"
                                                icon={faClose}
                                            />
                                        </button>
                                    </div>
                                    <ChromePicker color={color} onChange={handleChange} />
                                </div>
                            )}
                        </div>
                        <div className="bg-white m-3 p-2 cursor-crosshair h-fit w-full shadow-xl">
                            <canvas
                                ref={canvasRef}
                                className={`relative w-full h-full`}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseMove={handleMouseMove}
                            />
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default Board;