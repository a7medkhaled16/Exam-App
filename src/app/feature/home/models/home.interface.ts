export interface diplomas {
  status: boolean
  code: number
  payload: Payload
}

export interface Payload {
  data: Daum[]
  metadata: Metadata
}

export interface Daum {
  id: string
  title: string
  description: string
  image: string
  immutable: boolean
  createdAt: string
  updatedAt: string
}

export interface Metadata {
  page: number
  limit: number
  total: number
  totalPages: number
}



export interface Examss {
  status: boolean
  code: number
  payload: ExamsPayload
}

export interface ExamsPayload {
  data: Exam[]
  metadata: Metadata
}

export interface Exam {
  id: string
  title: string
  description: string
  image: string
  duration: number
  diplomaId: string
  diploma:  {
    id: string;
    title: string;
  }
  questionsCount: number
  createdAt: string
  updatedAt: string
}

export interface Questionss {
  status: boolean
  code: number
  payload: QuestionsPayload
}

export interface QuestionsPayload {
  questions: Question[]
}

export interface Question {
  id: string
  text: string
  examId: string
  createdAt: string
  updatedAt: string
  answers: Answer[]
}

export interface Answer {
  id: string
  text: string
}



export interface SubmitExam {
  examId: string
  answers: { questionId: string; answerId: string }[]
  startedAt: string
}

export interface SubmissionResult {
  status: boolean
  code: number
  payload: {        // ← ضيف payload
    message: string
    submission: {
      id: string
      examId: string
      examTitle: string
      score: number
      totalQuestions: number
      correctAnswers: number
      wrongAnswers: number
      startedAt: string
      submittedAt: string
    }
    analytics: {
      questionId: string
      questionText: string
      selectedAnswer: any
      isCorrect: boolean
      correctAnswer: any
    }[]
  }
}