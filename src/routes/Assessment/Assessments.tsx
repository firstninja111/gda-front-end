import { Button, Progress, Table } from 'react-daisyui'
import { Sidebar } from '~/components/common'
import { assessments } from '~/data/assessments'
import { Link } from 'react-router-dom'
import { Assesments } from '~/types/assessment'
import { useAuth } from '~/context/AuthContext'
import { useQuery } from 'react-query'
import { getFormatDate, assessmentMenu } from '~/libs/common'

function Assessment() {
  let assessmentObject: Assesments = assessments
  const { getAssessmentProgress } = useAuth()

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

  return (
    <>
      <div className="container p-2 mx-auto flex justify-start pt-24 pb-12">
        <Sidebar title="Content" items={assessmentMenu} />
        <div className="container mx-auto pb-12 overflow-x-auto">
          <Table className="w-full">
            <Table.Head>
              <span>Assessment</span>
              <span className="hidden md:block">Last Completed</span>
              <span className="hidden md:block">Score</span>
              <span className="hidden md:block">Status</span>
            </Table.Head>

            <Table.Body>
              {Object.keys(assessmentObject).map((key, index) => {
                const assessment = assessmentObject[key]
                const progress: any[] = Object.entries(assessmentProgress).filter(
                  (value: any) => value[1].name == assessment?.name,
                )
                let completedCount = 0
                for (const property in progress) {
                  completedCount++
                }
                if (assessment?.name != 'GAD-7' && assessment?.name != 'PHQ-9') {
                  return null
                }
                return (
                  <Table.Row key={`${assessment?.name}`} hover>
                    <span>
                      <Link
                        className="text-blue-500"
                        to={`/assessments/${assessment?.name}${completedCount == 0 ? '/form' : ''}`}
                      >
                        {assessment?.name}
                        {(assessment?.name == 'GAD-7' || assessment?.name == 'PHQ-9') && completedCount == 0 && (
                          <span className="text-red-500 text-2xl">*</span>
                        )}
                      </Link>
                    </span>
                    <span className="hidden md:block">
                      {completedCount == 0 ? '' : getFormatDate(progress[progress.length - 1][1]['date'])}
                    </span>
                    <span className="hidden md:block">
                      {completedCount == 0 ? '' : progress[progress.length - 1][1]['score']}
                    </span>
                    <span className="hidden md:block">
                      {completedCount == 0 ? (
                        'Todo'
                      ) : (
                        <Link to={`/assessments/${assessment?.name}/form`} className="ml-auto">
                          <Button
                            className="bg-gradient-to-tr from-[#2f28f2] to-[#9794f9] border-none normal-case"
                            size="sm"
                          >
                            Retake
                          </Button>
                        </Link>
                      )}
                    </span>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Assessment
