import { Button, Card, Progress } from 'react-daisyui'

export type LessonCardProps = {
  lessonProgress: any
  lesson: any
  navigateLessonDetail: (action: string, lessonNo: string, lastUnitCompleted: number, percent: number) => void
  showNavigiator: boolean
}

const LessonCard = ({ lessonProgress, lesson, navigateLessonDetail, showNavigiator = true }: LessonCardProps) => {
  if (!lesson) {
    return null
  }

  const lessonNo = lesson.lessonNo
  const url = lesson.hero_url
  const title = lesson.title

  const percent = Number(
    (lessonProgress == undefined || lessonProgress[lessonNo] == undefined
      ? 0
      : (lessonProgress[lessonNo].last_unit_completed / lesson.units.length) * 100
    ).toFixed(),
  )

  const handleClick = (e: any, lastUnitCompleted: number, percent: number) => {
    navigateLessonDetail(e.target.name, lessonNo, lastUnitCompleted, percent)
  }

  const getLessonHeader = () => {
    if (percent == 100) {
      return `Review Lesson ${lessonNo}`
    }
    if (lessonNo == '1' || lessonProgress[Number(lessonNo) - 1]?.completed) {
      return `Continue Lesson ${lessonNo}`
    }
    return 'Finish the lastest lesson before moving on'
  }
  const bgImageStyle = `url(${url}) center center / cover no-repeat transparent`

  return (
    <Card
      className="w-full h-[25vh] md:h-[35vh] flex justify-end my-1 rounded"
      style={{ background: bgImageStyle }}
      onClick={(e) => handleClick(e, lessonProgress[lessonNo]?.last_unit_completed, percent)}
      id={`section-${lessonNo}`}
    >
      <div className="w-full bg-gradient-to-r from-[#0000008c] to-[#00000064]">
        <div className="flex justify-between items-center px-3">
          <div className="text-white md:py-2">
            {!showNavigiator && (
              <div className="flex flex-col">
                <p className="md:my-1 text-sm md:text-xl">{getLessonHeader()}</p>
              </div>
            )}

            <div className="md:my-1 font-bold text-[#7cbe54]">
              <Card.Title className="text-lg md:text-2xl">
                {' '}
                {lessonNo}. {title}{' '}
              </Card.Title>
            </div>
            <div className="flex flex-col py-1">
              <Progress className={`bg-[#cfcefc] progress progress-primary w-56`} value={percent} max="100" />
              <p className="md:my-1 text-sm md:text-xl">{percent}% completed</p>
            </div>
          </div>
          {showNavigiator && (
            <Card.Actions>
              {(lessonNo == '1' || lessonProgress[Number(lessonNo) - 1]?.completed) && (
                <Button
                  name="lesson-action"
                  className="bg-gradient-to-tr from-[#2f28f2] to-[#9794f9] border-none btn-sm md:btn-md"
                  onClick={(e) => {
                    handleClick(e, lessonProgress[lessonNo]?.last_unit_completed, percent)
                  }}
                  size="sm"
                >
                  {percent == 0 ? 'Start' : percent == 100 ? 'Review' : 'Continue'}
                </Button>
              )}
            </Card.Actions>
          )}
        </div>
      </div>
    </Card>
  )
}

export default LessonCard
