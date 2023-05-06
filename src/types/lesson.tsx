type VideoContent = {
  type: 'video'
  videos?: Record<number, { id: string; poster: string; src: string }>[]
}

type HTMLContent = {
  type: 'text' | 'title'
  html: string
}

export type QuizItem = {
  quiz_id: number
  title: string
  subtitle: string
  instruction: string
  options: {
    quiz_option_id: number
    name: string
    correct: boolean
    selected_text: string
    unselected_text: string
  }[]
}

export type UnitItem = {
  title: string
  unitNo: string
  content: (VideoContent | HTMLContent)[]
  quizzes?: QuizItem[]
}

export type PracticeItem = {
  practiceId: number
  reviewNo: number
}

export type LessonSingle = {
  title: string
  hero_url: string
  lessonNo: string
  takeAways: string[]
  units: UnitItem[]
  practices: PracticeItem[]
}

export type LessonProgress = {
  lesson_id: number // Lesson Id
  last_unit_completed: number // The latest unite_id the user completed in this lesson (Initially 0)
  completed: boolean // If whole lesson is completed it sets to true
}
