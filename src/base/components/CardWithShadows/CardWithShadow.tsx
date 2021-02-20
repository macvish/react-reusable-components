import React from 'react'

import 'CardWithShadow.css'

interface CardWithShadowProps {
  title?: string
  body?: string
  className?: string
  featuredImageSource?: string
}

export const CardWithShadow: React.FC<CardWithShadowProps> = ({ body, className, featuredImageSource, title }) => {
    return (
        <div className={`card-with-shadow ${className}`}>
            <div className="mb-4">
            <img src={featuredImageSource} />
            </div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
