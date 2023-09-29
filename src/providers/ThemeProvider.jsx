"use client"

import React from 'react'

const ThemeProvider = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div>ThemeProvider</div>
    )
}

export default ThemeProvider