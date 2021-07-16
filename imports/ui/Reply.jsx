import React from 'react'

export default function Reply({ reply }) {
  console.log(reply)
  return (
      <li>
        <div className="post-message">
        {reply.text}
        </div>
        <div className="post-author">
          <div>
            Posted By: {reply.username}
          </div>
        </div>
      </li>
  )
}
