// Author: Walusansa Jesse Kisaale
import MemberCard from './MemberCard'
import type { Member } from './types'

// Task 42: Array State (Typed) — starting data for the dashboard
const initialMembers: Member[] = [
  {
    id: 1,
    name: 'Amina Yusuf',
    role: 'Frontend Developer',
    tasksCompleted: 12,
    isActive: true,
    bio: 'Focused on component architecture.',
  },
  {
    id: 2,
    name: 'Brian Otieno',
    role: 'Backend Developer',
    tasksCompleted: 8,
    isActive: false,
  },
]

function TeamDashboard() {
  const handleRemoveMember = (_id: number) => undefined
  const handleToggleActive = (_id: number) => undefined

  return (
    <>
      <h1>Team Dashboard</h1>
      <p>A shared dashboard for tracking our team's progress.</p>

      <div className="dashboard-grid">
        {initialMembers.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onRemove={handleRemoveMember}
            onToggleActive={handleToggleActive}
          />
        ))}
      </div>
    </>
  )
}

export default TeamDashboard
