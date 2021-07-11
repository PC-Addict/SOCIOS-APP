import React from 'react'
import './style.css'
export default function Comment({ username, caption }) {
    return (
        <div className="comment">
            <p><span style={{fontWeight: "bolder", marginRight:"4px"}}>{username}</span>
                 {caption}</p>
        </div>
    )
}
