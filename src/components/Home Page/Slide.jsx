import React from 'react'
import { useState, useEffect } from 'react';
import { Data } from './Data'

export const Slide = () => {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1);
    }

    let sculpture = Data[index];
    console.log(sculpture)

    return (
        <div>Slide
            <button>NEXT</button>

        </div>
    )
}
