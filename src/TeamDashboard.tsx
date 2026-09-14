// Author: Jongkuch Isaac Chol Anyar
// Author: Olive Umurerwa
// Contributor: Beni Niyogisubizo
// Contribution: Integrated Tasks 31–40 — score controls and member form
import AddMemberForm from './AddMemberForm'
import MemberCard from './MemberCard'
import ScoreControls from './ScoreControls'

interface TeamMember {
  id: number
  name: string
  role: string
  tasksCompleted?: number
  isActive: boolean
  bio?: string
}

function TeamDashboard() {
  const members: TeamMember[] = [
    {
      id: 1,
      name: 'Amara Okafor',
      role: 'Frontend Developer',
      tasksCompleted: 8,
      isActive: true,
      bio: 'Builds accessible and responsive interfaces.',
    },
    {
      id: 2,
      name: 'Daniel Mensah',
      role: 'TypeScript Developer',
      tasksCompleted: 6,
      isActive: false,
    },
  ]

  const handleAddMember = (name: string): void => {
    console.log(`Submitted member: ${name}`)
  }

  return (
    <>
      <h1>Team Dashboard</h1>
      <p>A shared dashboard for tracking our team's progress.</p>

      <ScoreControls />

      <AddMemberForm onAddMember={handleAddMember} />

      {members.map((member) => (
        <MemberCard
          key={member.id}
          name={member.name}
          role={member.role}
          tasksCompleted={member.tasksCompleted}
          isActive={member.isActive}
          bio={member.bio}
        />
      ))}
    </>
  )
}

export default TeamDashboard
