import { BiPencil, BiBookOpen, BiBadgeCheck, BiInfoSquare } from 'react-icons/bi'
import { Button, Progress } from 'react-daisyui'
import { Link } from 'react-router-dom'
import { useData } from '~/context/DataContext'

export type ActivityLessonProps = {
  type: string
  lessonId: string
  unitId: number | undefined
  practiceId: string
  percent: number // percentage of progress in lesson type, completed counts in practice type
  content: string | undefined
}

const ActivityLesson = ({
  type,
  lessonId = '',
  unitId = 0,
  practiceId = '',
  percent = 0,
  content = '',
}: ActivityLessonProps) => {
  const { getLessonDetail } = useData()
  const lesson = getLessonDetail(lessonId)

  const renderIcon = (type: string) => {
    switch (type) {
      case 'tips':
        return <BiInfoSquare size="large" className="w-full text-[#762477]" />
      case 'lesson':
        return <BiBookOpen size="large" className="w-full text-[#70b04a]" />
      case 'practice':
        return <BiPencil size="large" className="w-full text-[#762477]" />
    }
  }

  const renderContent = (type: string) => {
    switch (type) {
      case 'tips':
        return <p className="text-gray-500 text-sm md:text-xl">{content}</p>
      case 'lesson':
        return (
          <div>
            <p className="text-green-400">{`Finish Lesson ${lessonId}`}</p>
            <p className="text-gray-500 text-sm md:text-xl">{lesson?.title}</p>
            <Progress
              max={100}
              value={percent}
              color="info"
              className="w-full md:w-1/2 h-4 mt-4 progress progress-primary dark:bg-white"
            />
            <p className="text-gray-400">You're {percent}% complete</p>
          </div>
        )
      case 'practice':
        return (
          <div>
            <p className="text-purple-700">{`Complete Lesson ${lessonId} Practice`}</p>
            <p className="text-gray-500 text-sm md:text-xl">{content}</p>
            <div className="flex mt-2">
              <BiBadgeCheck
                size="large"
                className={`${percent !== 0 ? 'text-[#89d055]' : 'text-gray-300'} w-6 mr-2 hidden md:block`}
              />
              {percent !== 0 ? (
                <span>
                  Completed <span className="underline text-gray-400 ml-2"> {percent} items </span>
                </span>
              ) : (
                <span>Not completed yet</span>
              )}
            </div>
          </div>
        )
    }
  }

  const renderButton = (type: string) => {
    switch (type) {
      case 'tips':
        return 'Read'
      case 'lesson':
        return percent === 0 ? 'Start' : 'Continue'
      case 'practice':
        return 'Start'
    }
  }

  const renderButtonAction = (type: string) => {
    switch (type) {
      case 'lesson':
        return percent == 0 ? `/lessons/${lessonId}` : `/lessons/${lessonId}/units/${unitId}`
      case 'tips':
      case 'practice':
        return `/practice/${lessonId}/${practiceId}`
      default:
        return ''
    }
  }

  return (
    <div className="w-full p-4 border-b flex justify-between">
      <div className="w-12 md:w-16">
        <div className="shadow-md shadow-gray-300 w-12 h-12 md:w-16 md:h-16 mr-4 rounded">{renderIcon(type)}</div>
      </div>
      <div className="w-full px-4 py-2">{renderContent(type)}</div>
      <div className="flex items-center">
        <Link to={renderButtonAction(type)}>
          <Button className="min-w-[80px] md:min-w[100px] text-white" color="info" size="sm">
            {renderButton(type)}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ActivityLesson
