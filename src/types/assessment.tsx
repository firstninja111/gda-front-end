export type Assessment = {
  name: string
  heading: string
  interpretation?: {
    statement: string
    scores?: {
      range?: string
      statement: string
    }[]
    conclusion?: string
  }
  questions: {
    id: number
    statement: string
    options: { id: number; statement: string }[]
  }[]
}

export type Assesments = Record<string, Assessment>
