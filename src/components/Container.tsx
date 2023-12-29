import React from "react"

type Props = {
    children: React.ReactNode
}
export function Container({ children }: Props) {

    return (
        <div className="cocktail-container">
            {children}
        </div>
    )
}