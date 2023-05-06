import { Sidebar } from '~/components/common'
import { assessments } from '~/data/assessments'
import { useParams } from 'react-router-dom'
import { Assesments } from '~/types/assessment'
import { Avatar, Form, Radio, Button } from 'react-daisyui'
import { useState } from 'react'
import { useAuth } from '~/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import avatarSRushing from '~/static/images/DrSRushing-90x90.png'
import avatarJWright from '~/static/images/DrJWright-90x90.png'
import { useQuery } from 'react-query'

const assessmentMenu = [
  {
    name: 'Lessons',
    to: '/lessons',
  },
  {
    name: 'Exercises by Lessons',
    to: '/',
  },
  {
    name: 'Exercise Library',
    to: '/practice',
  },
  {
    name: 'Assessments',
    to: '/assessments',
  },
  {
    name: 'Alerts',
    to: '/',
  },
  {
    name: 'Resources',
    to: '/',
  },
]

export type AssessmentFromProps = {
  name: string
}

const AssessmentForm = () => {
  const params = useParams()
  const { name } = params
  const { updateAssessmentProgress, getProfile } = useAuth()
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  if (!name) return null

  const asessmentObject: Assesments = assessments
  const assessment = asessmentObject[name]
  const [scores, setScores] = useState<number[]>(Array.from({ length: assessment.questions.length }, (v, i) => -1))
  const [loading, setLoading] = useState(false)

  if (!assessment) return null

  // Get narrator info from profile
  let narrator = 'rushing'
  const profileHook = useQuery('getProfile', async () => {
    return await getProfile()
  })
  if (profileHook.isSuccess) {
    narrator = profileHook.data[0].narrator
  }

  const calculateScore = (index: number, score: number) => {
    setScores([...scores.slice(0, index), score, ...scores.slice(index + 1)])
    setError(false)
  }

  const submitTotalScore = async () => {
    let totalScore = 0
    for (let i = 0; i < assessment.questions.length; i++) {
      if (scores[i] == -1) {
        setError(true)
        return
      }
      totalScore += scores[i]
    }
    setLoading(true)

    await updateAssessmentProgress(name, totalScore)
    navigate('/assessments')
  }
  return (
    <>
      <div className="container p-2 mx-auto flex justify-start pt-24 pb-12">
        <Sidebar title="Content" items={assessmentMenu} />
        <div className="w-full">
          <h1 className="text-lg py-3 px-2 font-bold bg-gray-100 text-[#596f8d] dark:bg-transparent dark:text-gray-400">
            {name}
          </h1>
          <div className="flex items-center py-4 border-b">
            <Avatar
              className="mr-4"
              src={narrator == 'rushing' ? avatarSRushing : avatarJWright}
              shape="square"
              size={50}
            />
            <h1 className="text-gray-600 py-3 px-2 font-medium">{assessment.heading}</h1>
          </div>
          {assessment.interpretation?.statement && (
            <h2 className="text-gray-600 py-3 px-2 font-medium">{assessment.interpretation?.statement}</h2>
          )}
          {assessment.interpretation?.scores?.map((score, index) => (
            <p key={index}>{`${score.range != undefined ? `${score.range}: ` : ''} ${score.statement}`}</p>
          ))}
          {assessment.interpretation?.conclusion && (
            <h2 className="text-gray-600 py-3 px-2 font-medium">{assessment.interpretation?.conclusion}</h2>
          )}

          <Form className="mt-4">
            {assessment.questions.map((question, index) => (
              <div key={question.id} className="pt-4">
                <p className="font-medium">
                  {index + 1}. {question.statement}
                </p>
                <div className="ml-4">
                  {question.options.map((option, score) => (
                    <Form.Label
                      title={option.statement}
                      key={`${question.id}-${option.id}`}
                      className="flex flex-row-reverse justify-end"
                    >
                      <Radio
                        name={question.id.toString()}
                        className="mr-4"
                        onClick={() => {
                          calculateScore(index, score)
                        }}
                        size="sm"
                      />
                    </Form.Label>
                  ))}
                </div>
              </div>
            ))}
          </Form>
          <div className="border-t pt-4 mt-4">
            <p className="text-red-600 h-[20px]">{error ? 'Please fill out all of the questions.' : ''}</p>
            <Button
              type="button"
              name="lesson-action"
              className="bg-gradient-to-tr from-[#2f28f2] to-[#9794f9] border-none btn-sm md:btn-md float-right"
              onClick={(e) => submitTotalScore()}
              size="sm"
              disabled={loading}
            >
              {loading && (
                <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="24" visible />
              )}
              <span className="ml-2">Submit</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssessmentForm
