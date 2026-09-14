// Author: Jongkuch Isaac Chol Anyar
// Author: Olive Umurerwa
// Author: Walusansa Jesse Kisaale
// CSS import added by: Frida Kayiranga
import './MemberCard.css'
import type { Member } from './types'

interface MemberCardProps {
  member: Member
  onRemove: (id: number) => void
  onToggleActive: (id: number) => void
}

function MemberCard({ member, onRemove, onToggleActive }: MemberCardProps) {
  const { id, name, role, tasksCompleted, isActive, bio } = member

  return (
    <div className={`card ${isActive ? 'card--active' : 'card--inactive'}`}>
      <h3 className="card__name" style={{ fontWeight: 'bold' }}>{name}</h3>
      <p className="card__role">{role}</p>
      <p className="card__tasks">Tasks completed: {tasksCompleted}</p>
      <p className={`card__status ${isActive ? 'status--active' : 'status--inactive'}`}>
        {isActive ? 'Active' : 'Inactive'}
      </p>
      {bio && <p className="card__bio">{bio}</p>}

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
