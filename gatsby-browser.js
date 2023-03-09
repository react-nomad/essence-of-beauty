import React from 'react'
import { Script } from 'gatsby'

export const wrapRootElement = ({ element }) => {
    return (
        <>
            <Script src="https://cdn.tailwindcss.com/3.2.6"/>
            {element}
        </>
    )
}
