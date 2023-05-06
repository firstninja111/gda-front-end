import { Form, Radio, Alert, Checkbox } from 'react-daisyui'
import { QuizItem } from '~/types/lesson'
import { FaCheck } from 'react-icons/fa'
import { BsQuestionSquareFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'

export type LessonQuizProps = {
  type: string
  quiz: QuizItem
  currentId: number
  quizCount: number
  isSubmit: boolean
  answerChoose: () => void
  answerUnchoose: () => void
  error: boolean
}

const LessonQuiz = ({
  type,
  quiz,
  currentId,
  quizCount,
  isSubmit,
  answerChoose,
  answerUnchoose,
  error,
}: LessonQuizProps) => {
  const [selectedId, setSelectedId] = useState<number[]>([])
  const onClickHandler = (optionId: number) => {
    if (type == 'radio') {
      setSelectedId([optionId])
      return
    }

    const index = selectedId.indexOf(optionId)
    if (index == -1) {
      setSelectedId([...selectedId, optionId])
      return
    }

    setSelectedId([...selectedId.slice(0, index), ...selectedId.slice(index + 1)])
  }
  useEffect(() => {
    if (selectedId.length == 0) {
      answerUnchoose()
      return
    }
    answerChoose()
  }, [selectedId])

  return (
    <div>
      <div className="flex mb-4">
        <BsQuestionSquareFill className="text-4xl mr-3 text-[#70b04a]" />
        <h2 className="text-xl font-medium">
          Review Questions
          <span className="text-gray-500 italic ml-2">{`${currentId} of ${quizCount} Question${
            quizCount > 1 ? 's' : ''
          }`}</span>
        </h2>
      </div>
      <div className="bg-[#eee] p-4 rounded-md shadow-md shadow-gray-400">
        <h2 className="text-xl mb-2">{quiz.title}</h2>
        <h2 className="text-lg mb-2">{quiz.subtitle}</h2>

        <h2 className="text-[#596f8d] text-md font-medium">{quiz.instruction}</h2>
        <Form className="mt-1">
          {quiz.options &&
            quiz.options != undefined &&
            quiz.options.map((option) => (
              <div
                className={`mt-1 flex ${!isSubmit && 'p-4 m-[1px]'} ${
                  !isSubmit &&
                  selectedId.includes(option.quiz_option_id) &&
                  (option.correct ? 'border border-green-300' : 'border border-red-300')
                } ${!isSubmit && option.correct && 'border border-green-300'} ${!isSubmit && 'bg-white'}`}
                key={option.quiz_option_id}
              >
                {type == 'radio' ? (
                  <Radio
                    id={`radio_${option.quiz_option_id}`}
                    name={quiz.quiz_id.toString()}
                    className={`mr-4 ${!isSubmit ? 'mt-2 bg-[#b3afaf]' : 'mt-1'}`}
                    size="sm"
                    onClick={() => {
                      onClickHandler(option.quiz_option_id)
                    }}
                    disabled={!isSubmit}
                    defaultChecked={false}
                  />
                ) : (
                  <Checkbox
                    id={`radio_${option.quiz_option_id}`}
                    name={quiz.quiz_id.toString()}
                    className={`mr-4 ${!isSubmit ? 'mt-2 bg-[#b3afaf]' : 'mt-1'}`}
                    size="sm"
                    onClick={() => {
                      onClickHandler(option.quiz_option_id)
                    }}
                    disabled={!isSubmit}
                  />
                )}

                <div className="flex w-full justify-between">
                  <div>
                    <label htmlFor={`radio_${option.quiz_option_id}`}>{option.name}</label>
                    {!isSubmit && selectedId.includes(option.quiz_option_id) && (
                      <p className="ml-2 text-gray-500">
                        {option.correct ? option.selected_text : option.unselected_text}
                      </p>
                    )}
                    {!isSubmit && !selectedId.includes(option.quiz_option_id) && option.correct && (
                      <p className="ml-2 text-gray-500">{option.unselected_text}</p>
                    )}
                  </div>
                  {!isSubmit && selectedId.includes(option.quiz_option_id) && option.correct && (
                    <div className="flex items-center">
                      <FaCheck className="text-xl text-[#70b04a]" />
                    </div>
                  )}
                </div>
              </div>
            ))}
        </Form>
        {error && (
          <Alert
            className="my-2"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 mx-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            }
          >
            Please make a selection before continuing.
          </Alert>
        )}
      </div>
    </div>
  )
}

export default LessonQuiz
