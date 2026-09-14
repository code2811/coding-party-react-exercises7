// Author: Jongkuch Isaac Chol Anyar
// Author: Olive Umurerwa
import MemberCard from './MemberCard'

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>A shared dashboard for tracking our team's progress.</p>
      <MemberCard name="Amara Okafor" role="Frontend Developer" tasksCompleted={8} isActive />
      <MemberCard name="Daniel Mensah" role="TypeScript Developer" tasksCompleted={6} isActive={false} />
    </>
  )
}

export default TeamDashboard
