// Author: Walusansa Jesse Kisaale
import type { Member } from './types'

interface MemberCardProps {
  member: Member
  onRemove: (id: number) => void
  onToggleActive: (id: number) => void
}

function MemberCard({ member, onRemove, onToggleActive }: MemberCardProps) {
  const { id, name, role, tasksCompleted, isActive, bio } = member

  return (
    <div className={`member-card ${isActive ? 'member-card--active' : 'member-card--inactive'}`}>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>Tasks completed: {tasksCompleted}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      {bio && <p className="member-card__bio">{bio}</p>}

      <div className="member-card__actions">
        {/* Task 47: Toggle Member Status */}
        <button type="button" onClick={() => onToggleActive(id)}>
          {isActive ? 'Set Inactive' : 'Set Active'}
        </button>

        {/* Task 45: Remove Member */}
        <button type="button" onClick={() => onRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default MemberCard
