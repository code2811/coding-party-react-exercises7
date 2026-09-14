// Author: Beni Niyogisubizo
// Contribution: Tasks 31–35 — team score state and controls

import { useState } from 'react'

function ScoreControls() {
  const [teamScore, setTeamScore] = useState<number>(0)

  const increaseScore = (): void => {
    setTeamScore((previousScore) => previousScore + 1)
  }

  const decreaseScore = (): void => {
    setTeamScore((previousScore) => Math.max(0, previousScore - 1))
  }

  return (
    <section>
      <h2>Team Score: {teamScore}</h2>

      <button type="button" onClick={increaseScore}>
        Increase Score
      </button>

      <button type="button" onClick={decreaseScore}>
        Decrease Score
      </button>
    </section>
  )
}

export default ScoreControls
