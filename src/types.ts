// Author: Walusansa Jesse Kisaale

// Task 41: Member Interface — represents a complete team member object
export interface Member {
  id: number
  name: string
  role: string
  tasksCompleted: number
  isActive: boolean
  bio?: string
}
