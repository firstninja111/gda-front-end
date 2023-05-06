import _ from 'lodash'
import { BiCheckCircle } from 'react-icons/bi'
import { Button } from 'react-daisyui'
import { Link } from 'react-router-dom'
import { BiPencil, BiInfoSquare } from 'react-icons/bi'

export type LessonPracticeProps = {
  title: string
  practices: ({ id: number; isReadingMaterial?: any; title: string } | undefined)[]
  lessonId: string
  practiceProgress: any
}

function LessonPractice({ lessonId, title, practices, practiceProgress }: LessonPracticeProps) {
  return (
    <div className="w-full p-2">
      <h1 className="my-2 font-bold text-2xl text-[#7cbe54]">{title}</h1>
      <div>
        {practices.map((practice) => {
          const progress: any = _.find(practiceProgress, { practice_id: practice?.id })
          return (
            <PracticeRow
              key={practice?.id}
              data={practice}
              lessonId={lessonId}
              completedCount={progress == undefined ? 0 : progress?.completedCount}
            />
          )
        })}
      </div>
    </div>
  )
}

function PracticeRow({
  data,
  lessonId,
  completedCount,
}: {
  data: { id: number; isReadingMaterial?: any; title: string } | undefined
  lessonId: string
  completedCount: number
}) {
  if (!data) return null
  const { id, isReadingMaterial, title } = data
  const practiceStartPage = 0

  const renderIcon = (type: string) => {
    switch (type) {
      case 'tips':
        return <BiInfoSquare size="large" className="w-full text-[#762477]" />
      case 'practice':
        return <BiPencil size="large" className="w-full text-[#762477]" />
    }
  }

  return (
    <div className="flex items-center border-b py-2" key={id}>
      <div className="mr-4 w-24">
        <div className="shadow-md shadow-gray-300 w-12 h-12 md:w-16 md:h-16 mr-4 rounded">
          {renderIcon(isReadingMaterial == true ? 'tips' : 'practice')}
        </div>
      </div>
      <div className="mr-4 w-96">
        {isReadingMaterial != true && <p className="font-medium text-[#762477]">Complete Lesson {lessonId} Practice</p>}
        <p className="text-xl font-medium text-gray-500">{title}</p>
        {isReadingMaterial != true && (
          <div className="flex mt-2">
            <BiCheckCircle
              size="large"
              className={`${completedCount !== 0 ? 'text-[#89d055]' : 'text-gray-300'} w-6 mr-2 hidden md:block`}
            />
            {completedCount !== 0 ? (
              <span>
                Completed <span className="underline text-gray-400 ml-2"> {completedCount} items </span>
              </span>
            ) : (
              <span>Not completed yet</span>
            )}
          </div>
        )}
      </div>

      <Link to={`/practice/${lessonId}/${id}`}>
        <Button size="sm" className="bg-gradient-to-tr from-[#762477] to-[#9794f9] border-none">
          {isReadingMaterial == true ? 'Read' : 'Start'}
        </Button>
      </Link>
    </div>
  )
}

export default LessonPractice
