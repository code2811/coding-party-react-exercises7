// Author: Jongkuch Isaac Chol Anyar
// Author: Olive Umurerwa
// CSS import added by: Frida Kayiranga
import './MemberCard.css'

interface MemberCardProps {
  name: string
  role: string
  tasksCompleted?: number
  isActive: boolean
  bio?: string
}

function MemberCard({ name, role, tasksCompleted = 0, isActive, bio }: MemberCardProps) {
  return (
    <div className={`card ${isActive ? 'card--active' : 'card--inactive'}`}>
      <h3 className="card__name" style={{ fontWeight: 'bold' }}>{name}</h3>
      <p className="card__role">{role}</p>
      <p className="card__tasks">Tasks completed: {tasksCompleted}</p>
      <p className={`card__status ${isActive ? 'status--active' : 'status--inactive'}`}>
        {isActive ? 'Active' : 'Inactive'}
      </p>
      {bio && <p className="card__bio">{bio}</p>}
    </div>
  )
}

export default MemberCard
