// Author: Jongkuch Isaac Chol Anyar
// Author: Olive Umurerwa
interface MemberCardProps {
  name: string
  role: string
}

function MemberCard({ name, role }: MemberCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  )
}

export default MemberCard
