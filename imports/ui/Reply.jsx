import React from 'react'

export default function Reply({ reply }) {
  return (
      <li>
        <div className="post-message">
        {reply.text}
        </div>
        <div className="post-author">
          <div>
            Posted By: {reply.email}
          </div>
        </div>
      </li>
  )
}
