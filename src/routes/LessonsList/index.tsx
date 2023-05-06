import { useParams, useNavigate } from 'react-router-dom'
import { Sidebar } from '~/components/common'
import { LessonCard } from '~/components/domain/lessons'
import { lessons } from '~/data/lessons'
import LessonDetailView from './LessonDetails'
import { useAuth } from '~/context/AuthContext'
import { useQuery } from 'react-query'

function LessonsListPage() {
  const { lessonId } = useParams()
  const { getLessonProgress, getPracticeProgress } = useAuth()
  const navigate = useNavigate()

  const fetchLessonProgress = async () => {
    return await getLessonProgress()
  }

  const fetchPracticeProgress = async () => {
    return await getPracticeProgress()
  }

  const multipleFetchProgress = () => {
    const lessonQuery = useQuery('lessonProgress', fetchLessonProgress)
    const practiceQuery = useQuery('practiceProgress', fetchPracticeProgress)
    return { lessonQuery, practiceQuery }
  }
  const { lessonQuery, practiceQuery } = multipleFetchProgress()

  if (!lessonQuery.isSuccess) {
    return <></>
  }
  let lessonProgress = lessonQuery.data[0]
  if (lessonProgress == undefined) {
    lessonProgress = {}
  }

  if (!practiceQuery.isSuccess) {
    return <></>
  }
  let practiceProgress = practiceQuery.data[0]
  if (practiceProgress == undefined) {
    practiceProgress = {}
  }

  const navigateLessonDetail = (action: string, lessonNo: string, lastUnitCompleted: number, percent: number) => {
    if (action == 'lesson-action') {
      lastUnitCompleted = lastUnitCompleted == undefined ? 1 : lastUnitCompleted
      if (percent == 100) {
        lastUnitCompleted = 1
      }
      navigate(`/lessons/${lessonNo}/units/${lastUnitCompleted}`)
      return
    }
    navigate(`/lessons/${lessonNo}`)
  }
  const lessonMenuItems = lessons.map((lesson) => ({
    name: `${lesson.lessonNo}. ${lesson.title}`,
    to: `/lessons/${lesson.lessonNo}?tab=0`,
  }))

  lessonMenuItems.unshift({
    name: 'All Lessons',
    to: '/lessons',
  })

  return (
    <>
      <div className="container mx-auto flex justify-start pt-24 pb-12">
        <Sidebar title="Lessons" items={lessonMenuItems} />
        <div className="w-full">
          {lessonId !== undefined ? (
            <LessonDetailView
              lessonProgress={lessonProgress}
              practiceProgress={practiceProgress}
              navigateLessonDetail={navigateLessonDetail}
            />
          ) : (
            <div>
              {lessons.map((lesson) => (
                <LessonCard
                  key={`lesson-${lesson.lessonNo}`}
                  lessonProgress={lessonProgress}
                  lesson={lesson}
                  navigateLessonDetail={navigateLessonDetail}
                  showNavigiator
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default LessonsListPage
