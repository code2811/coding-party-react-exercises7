// Author: Jongkuch Isaac Chol Anyar
// Author: Olive Umurerwa
// Author: Walusansa Jesse Kisaale
// CSS import added by: Frida Kayiranga
import './TeamDashboard.css'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
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

type StatusFilter = 'all' | 'active' | 'inactive'

function TeamDashboard() {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [newName, setNewName] = useState<string>('')
  const [newRole, setNewRole] = useState<string>('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setNewName(event.target.value)
  }

  function handleRoleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewRole(event.target.value)
  }

  function handleAddMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedName = newName.trim()
    const trimmedRole = newRole.trim()
    if (!trimmedName || !trimmedRole) return

    const newMember: Member = {
      id: Date.now(),
      name: trimmedName,
      role: trimmedRole,
      tasksCompleted: 0,
      isActive: true,
    }

    setMembers((prevMembers) => [...prevMembers, newMember])
    setNewName('')
    setNewRole('')
  }

  function handleRemoveMember(id: number) {
    setMembers((prevMembers) => prevMembers.filter((member) => member.id !== id))
  }

  function handleToggleActive(id: number) {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, isActive: !member.isActive } : member
      )
    )
  }

  const visibleMembers = members
    .filter((member) => {
      if (statusFilter === 'active') return member.isActive
      if (statusFilter === 'inactive') return !member.isActive
      return true
    })
    .filter((member) =>
      member.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    )

  return (
    <div className="dashboard">
      <h1>Team Dashboard</h1>
      <p>A shared dashboard for tracking our team's progress.</p>

      <form onSubmit={handleAddMember}>
        <input
          type="text"
          placeholder="Member name"
          value={newName}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Member role"
          value={newRole}
          onChange={handleRoleChange}
        />
        <button type="submit">Add Member</button>
      </form>

      <div className="dashboard-filters">
        <button type="button" onClick={() => setStatusFilter('all')}>
          All
        </button>
        <button type="button" onClick={() => setStatusFilter('active')}>
          Active
        </button>
        <button type="button" onClick={() => setStatusFilter('inactive')}>
          Inactive
        </button>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="dashboard__cards">
        {visibleMembers.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onRemove={handleRemoveMember}
            onToggleActive={handleToggleActive}
          />
        ))}
      </div>
    </div>
  )
}

export default TeamDashboard
