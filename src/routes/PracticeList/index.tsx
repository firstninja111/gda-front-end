import { PracticeCard } from '~/components/domain/practices'
import { LessonCard } from '~/components/domain/lessons'
import { practices } from '~/data/practice'
import { lessons } from '~/data/lessons'
import { Sidebar } from '~/components/common'
import { useAuth } from '~/context/AuthContext'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useData } from '~/context/DataContext'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import _ from 'lodash'

const practiceList = lessons.map((lesson) => ({
  name: `${lesson.lessonNo}. ${lesson.title}`,
  to: `/practice/${lesson.lessonNo}`,
}))

function PracticeListPage() {
  const { getLessonProgress, getPracticeProgress, practiceCompleteStatus } = useAuth()
  const { getPracticeDetail } = useData()
  const navigate = useNavigate()
  const { sectionId } = useParams()

  useEffect(() => {
    const element = document.getElementById(`section-${sectionId}`)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [sectionId])

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
  if (practiceCompleteStatus) {
    practiceQuery.refetch()
  }

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

  return (
    <div className="container mx-auto p-2 flex justify-start pt-24 pb-12">
      <Sidebar title="Exercises by Lessons" items={practiceList} />
      <div className="w-full">
        <h1 className="text-lg py-3 px-2 font-bold bg-gray-100 text-[#596f8d] dark:bg-transparent dark:text-gray-400">
          Exercises by Lessons
        </h1>
        <div>
          {lessons.map((lesson) => (
            <div key={`lesson-${lesson.lessonNo}`}>
              <LessonCard
                lessonProgress={lessonProgress}
                lesson={lesson}
                navigateLessonDetail={navigateLessonDetail}
                showNavigiator={false}
              />
              {lesson.practices.map((lessonPractice) => {
                const practice = getPracticeDetail(lessonPractice.practiceId)
                const progress: any = _.find(practiceProgress, { practice_id: lessonPractice.practiceId })

                return (
                  <PracticeCard
                    key={practice?.id}
                    practice={practice}
                    lessonId={lesson.lessonNo}
                    progress={progress}
                    blocked={
                      !(lesson.lessonNo == '1' || lessonProgress[String(Number(lesson.lessonNo) - 1)]?.completed)
                    }
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PracticeListPage
