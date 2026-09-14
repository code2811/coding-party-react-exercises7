// Author: Jongkuch Isaac Chol Anyar
// Contributor: Beni Niyogisubizo
// Contribution: Integrated Tasks 31–40 — score controls and member form

import AddMemberForm from './AddMemberForm'
import MemberCard from './MemberCard'
import ScoreControls from './ScoreControls'

function TeamDashboard() {
  const handleAddMember = (name: string): void => {
    console.log(`Submitted member: ${name}`)
  }

  return (
    <>
      <h1>Team Dashboard</h1>
      <p>A shared dashboard for tracking our team's progress.</p>

      <ScoreControls />

      <AddMemberForm onAddMember={handleAddMember} />

      <MemberCard />
      <MemberCard />
    </>
  )
}

export default TeamDashboard
