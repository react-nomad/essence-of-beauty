import React from 'react'
import { Script } from 'gatsby'

export const wrapRootElement = ({ element }) => {
    return (
        <>
            <Script src="https://cdn.tailwindcss.com"/>
            {element}
        </>
    )
}
