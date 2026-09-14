// Author: Beni Niyogisubizo
// Contribution: Tasks 36–40 — controlled input and typed form submission

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface AddMemberFormProps {
  onAddMember: (name: string) => void
}

function AddMemberForm({ onAddMember }: AddMemberFormProps) {
  const [newMemberName, setNewMemberName] = useState<string>('')
  const [submittedName, setSubmittedName] = useState<string>('')

  const handleNameChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setNewMemberName(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const trimmedName = newMemberName.trim()

    if (trimmedName === '') {
      return
    }

    onAddMember(trimmedName)
    setSubmittedName(trimmedName)
    setNewMemberName('')
  }

  return (
    <section>
      <h2>Add a New Member</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="member-name">Member name</label>

        <input
          id="member-name"
          name="memberName"
          type="text"
          value={newMemberName}
          onChange={handleNameChange}
          placeholder="Enter member name"
        />

        <button type="submit">Add Member</button>
      </form>

      {submittedName && <p>Submitted member: {submittedName}</p>}
    </section>
  )
}

export default AddMemberForm
