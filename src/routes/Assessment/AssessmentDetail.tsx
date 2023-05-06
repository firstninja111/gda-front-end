import { Avatar, Button } from 'react-daisyui'
import { assessments } from '~/data/assessments'
import { useParams } from 'react-router-dom'
import avatarSRushing from '~/static/images/DrSRushing-90x90.png'
import avatarJWright from '~/static/images/DrJWright-90x90.png'

import { Assesments } from '~/types/assessment'
import { Sidebar } from '~/components/common'
import { useAuth } from '~/context/AuthContext'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getFormatDate, assessmentMenu } from '~/libs/common'

function AssessmentDetail() {
  const param = useParams()
  const { name: assessmentName } = param
  const { getAssessmentProgress, getProfile } = useAuth()

  let assessmentObject: Assesments = assessments
  if (!assessmentName) return <></>

  const assessment = assessmentObject[assessmentName]

  const fetchAssessmentProgress = async () => {
    return await getAssessmentProgress()
  }

  let assessmentProgress: any = {}
  const { data, isSuccess } = useQuery('assessmentProgress', fetchAssessmentProgress)
  if (isSuccess) {
    assessmentProgress = data[0]
    if (assessmentProgress == undefined) {
      assessmentProgress = {}
    }
  }

  // Get narrator info from profile
  let narrator = 'rushing'
  const profileHook = useQuery('getProfile', async () => {
    return await getProfile()
  })
  if (profileHook.isSuccess) {
    narrator = profileHook.data[0].narrator
  }

  const progress: any[] = Object.entries(assessmentProgress).filter((value: any) => value[1].name == assessment?.name)
  return (
    <>
      <div className="container p-2 mx-auto flex justify-start pt-24 pb-12">
        <Sidebar title="Content" items={assessmentMenu} />
        <div className="container mx-auto pb-12 overflow-x-auto">
          <div className="mx-4">
            <h1 className="text-3xl text-blue-500 mb-4">{assessment?.name}</h1>
            <div className="flex mb-2">
              <Avatar
                className="mr-4"
                src={narrator == 'rushing' ? avatarSRushing : avatarJWright}
                shape="square"
                size={50}
              />
              <p>Nice work, you've completed the {assessment?.name}</p>
            </div>
            {progress.map((tracker, index) => (
              <div key={index} className="pb-2">
                <p>Assessment completed: {getFormatDate(tracker[1]['date'])}</p>
                <p className="font-medium text-gray-600">{`Score: ${tracker[1]['score']}`}</p>
              </div>
            ))}
            <hr className="mt-2" />
            <h2 className="text-2xl text-blue-400 mt-8">Your Latest Score</h2>
            <p>Based on your responses, your lastest score is {progress[progress.length - 1][1]['score']}.</p>

            <h2 className="text-2xl text-blue-400 mt-8">Interpretation</h2>
            {assessment.interpretation?.statement && (
              <h2 className="text-gray-600 py-3 font-medium">{assessment.interpretation?.statement}</h2>
            )}
            {assessment.interpretation?.scores?.map((score, index) => (
              <p key={index}>{`${score.range != undefined ? `${score.range}: ` : ''} ${score.statement}`}</p>
            ))}
            {assessment.interpretation?.conclusion && (
              <h2 className="text-gray-600 py-3 font-medium">{assessment.interpretation?.conclusion}</h2>
            )}

            <h2 className="text-2xl text-blue-400 mt-8">Feeling Hopeless or Suicidal?</h2>
            <p>Pleaes call teh National Suicide Prevention Lifeline at 1-800-273-8255 - available 24 hours a day.</p>

            <div className="border-t pt-4 mt-4">
              <Link to={`/assessments/${assessment?.name}/form`}>
                <Button
                  type="button"
                  name="lesson-action"
                  className="bg-gradient-to-tr from-[#2f28f2] to-[#9794f9] border-none btn-sm md:btn-md float-right"
                  size="sm"
                >
                  <span className="normal-case text-lg">Retake</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssessmentDetail
