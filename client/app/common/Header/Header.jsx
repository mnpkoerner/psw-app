import React, { useState, useEffect } from 'react'
import { getLibrary } from '../../services/getLibrary/getLibrary'

export const Header = () => {


    const declareText = () => {
        return 'THIS IS THE HEADER BRO'
    }

    useEffect(() => {
        getLibrary();
    }, [])

    return (
        <h3>{declareText()}</h3>
    )
}
