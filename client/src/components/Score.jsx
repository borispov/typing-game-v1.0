import React from 'react'

const Score = props => {
  const users = props.score
  return (
    <div className="stats">
      <div className="scoreboard">
        <div className="scoreboard__labels">
          <p> Name </p>
          <p> CPM </p>
          <p> WPM </p>
        </div>
        {users.map(usr => {
          return (
            <div className="scoreboard__users" key={usr.name}>
              <p>{usr.name}</p>
              <p>{usr.cpm && usr.cpm.toFixed(0)}</p>
              <p>{usr.wpm && usr.wpm.toFixed(0)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Score
