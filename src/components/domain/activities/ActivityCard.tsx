import { BiPencil, BiCog, BiBookOpen } from 'react-icons/bi'
import { Avatar } from 'react-daisyui'
import avatar from '~/static/images/DrSRushing-90x90.png'

export type LessonCardProps = {
  type: string
  examTitle: string
  duration: string
}

const ActivityCard = ({ type, examTitle, duration }: LessonCardProps) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'exam':
        return <BiPencil size="large" className="w-full text-[#762477]" />
      case 'login':
        return <BiCog size="large" className="w-full text-[#c5c5c5]" />
      case 'lesson':
        return <BiBookOpen size="large" className="w-full text-[#70b04a]" />
      case 'unlock':
        return <Avatar src={avatar} shape="square" size={40} />
    }
  }

  const renderContent = (type: string) => {
    switch (type) {
      case 'login':
        return (
          <p className="text-gray-700">
            <span className="text-blue-500">You</span> logged in
          </p>
        )
      case 'sessionTimeOut':
        return (
          <p className="text-gray-700">
            <span className="text-blue-500">Your</span> session timed out.
          </p>
        )
      case 'exam':
        return (
          <p className="text-gray-700">
            <span className="text-blue-500">You</span> completed an <span className="text-blue-400">{examTitle}</span>{' '}
            exercise.
          </p>
        )
      case 'lesson':
        return (
          <p className="text-gray-700">
            <span className="text-blue-500">You</span> finished 2 pages of{' '}
            <span className="text-blue-400">Lessons 4.</span>
          </p>
        )
      case 'unlock':
        return (
          <p className="text-gray-700">
            Congrats <span className="text-blue-500">Christianpt,</span> you have unlocked the{' '}
            <span className="text-blue-400">{examTitle}</span> exericese.
          </p>
        )
    }
  }

  return (
    <div className="flex py-2 border-t">
      <div className="shadow-md shadow-gray-300 w-10 h-10 mr-4 rounded">{renderIcon(type)}</div>
      <div>
        {renderContent(type)}
        <p className="text-xs text-gray-500 mt-1">{duration} ago</p>
      </div>
    </div>
  )
}

export default ActivityCard
