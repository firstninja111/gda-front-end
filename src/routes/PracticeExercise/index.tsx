import { useParams, useNavigate } from 'react-router-dom'
import { Practice } from '~/components/domain/practices'
import { lessons } from '~/data/lessons'
import Sidebar from '~/components/common/Sidebar'
import { useAuth } from '~/context/AuthContext'
import { getNextPracticeId, getPrevPracticeId } from '~/libs/utils'
import { useData } from '~/context/DataContext'

function PracticeExercisePage() {
  const { lessonId, practiceId } = useParams()
  const navigate = useNavigate()
  const { updatePracticeProgress, practiceCompleted } = useAuth()
  const { getPracticeDetail, getPracticeList, getLessonDetail } = useData()

  window.scrollTo(0, 0)
  if (!practiceId) {
    navigate('/practice')
  }
  const handleBackList = () => {
    navigate('/practice')
  }
  const handlePrev = () => {
    const prevPracticeId = getPrevPracticeId(lessonId, practiceId)
    const prevLessonId = Number(lessonId) - 1

    if (Number(prevPracticeId) < 0) {
      if (prevLessonId == 0) {
        navigate('/practice')
        return
      } else {
        navigate(`/lessons/${lessonId}`)
        return
      }
    }
    navigate(`/practice/${lessonId}/${prevPracticeId}`)
    return
  }
  const handleNext = async () => {
    const nextPracticeId = getNextPracticeId(lessonId, practiceId)

    if (nextPracticeId < 0) {
      if (Number(lessonId) == lessons.length) {
        navigate('/home')
      } else {
        navigate(`/lessons/${Number(lessonId) + 1}`)
      }
    } else {
      navigate(`/practice/${lessonId}/${nextPracticeId}`)
    }

    practiceCompleted()
    await updatePracticeProgress(Number(practiceId))
  }
  const practice = getPracticeDetail(Number(practiceId))

  if (!practice || !practice.practice) {
    return (
      <div className="container mx-auto p2 flex m-22">
        <h1>Practice not found</h1>
      </div>
    )
  }

  const practiceList = getPracticeList(lessonId, practiceId)
  practiceList.unshift({
    id: 0,
    name: 'All Exercises',
    to: '/practice',
    isReadingMaterial: false,
  })

  return (
    <div className="container mx-auto p-2 flex justify-start pt-24 pb-12">
      <Sidebar title={`Exercises of Lesson ${lessonId}`} items={practiceList} />
      <div className="flex-1">
        <Practice
          practice={practice}
          handleBackList={handleBackList}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isLastPractice={getNextPracticeId(lessonId, practiceId) < 0}
          isLastLesson={Number(lessonId) == lessons.length}
        />
      </div>
    </div>
  )
}

export default PracticeExercisePage
