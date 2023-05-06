import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts/highstock'
import { lessons } from '~/data/lessons'
import { ActivityCard } from '~/components/domain/activities'
import { ActivityLesson } from '~/components/domain/activities'
import { Button } from 'react-daisyui'
import { useAuth } from '~/context/AuthContext'
import { useQuery } from 'react-query'
import { useData } from '~/context/DataContext'
import _ from 'lodash'

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

function HomePage() {
  const { getLessonProgress, getPracticeProgress, getTrackerProgress, trackerStatus } = useAuth()
  const { getPracticeDetail } = useData()

  const fetchLessonProgress = async () => {
    return await getLessonProgress()
  }
  const fetchPracticeProgress = async () => {
    return await getPracticeProgress()
  }
  const fetchTrackerProgress = async () => {
    return await getTrackerProgress()
  }
  const multipleFetchProgress = () => {
    const lessonQuery = useQuery('lessonProgress', fetchLessonProgress)
    const practiceQuery = useQuery('practiceProgress', fetchPracticeProgress)
    const trackerQuery = useQuery('trackerProgress', fetchTrackerProgress)
    return { lessonQuery, practiceQuery, trackerQuery }
  }
  const { lessonQuery, practiceQuery, trackerQuery } = multipleFetchProgress()
  if (trackerStatus) {
    trackerQuery.refetch()
  }

  let lessonProgress: any = {}
  if (lessonQuery.isSuccess) {
    lessonProgress = lessonQuery.data[0]
  }

  let practiceProgress: any = {}
  if (practiceQuery.isSuccess) {
    practiceProgress = practiceQuery.data[0]
  }

  let trackerProgress: any = {}
  if (trackerQuery.isSuccess) {
    trackerProgress = trackerQuery.data[0]
  }

  const depressionData: number[] = []
  const anxietyData: number[] = []
  const categories: string[] = []

  for (const progress in trackerProgress) {
    const date = new Date(trackerProgress[progress].date)
    const dateFormat = `${(date.getDate() + 1).toString().padStart(2, '0')}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${date.getFullYear()} ${(date.getHours() + 1).toString().padStart(2, '0')}:${(
      date.getMinutes() + 1
    )
      .toString()
      .padStart(2, '0')}:${(date.getSeconds() + 1).toString().padStart(2, '0')}`

    categories.push(dateFormat)
    anxietyData.push(trackerProgress[progress].anxiety)
    depressionData.push(trackerProgress[progress].depression)
  }
  const limit = getWidth() < 400 ? 5 : 10

  //If width is mobile viewport, show only the latest 5 items, otherwise 10 items
  categories.splice(0, categories.length - limit)
  anxietyData.splice(0, anxietyData.length - limit)
  depressionData.splice(0, depressionData.length - limit)

  const getCurrentLesson = () => {
    for (let i = 0; i < lessons.length; i++) {
      const progress = lessonProgress[lessons[i].lessonNo]
      if (progress == undefined) {
        return i + 1
      }
      if (progress.completed == false) {
        return progress.lesson_id
      }
    }
    return lessons.length
  }
  const currentLessonId = getCurrentLesson()
  const options = {
    title: {
      text: '',
    },
    series: [
      {
        type: 'spline',
        name: 'Depression',
        color: '#4572a7',
        data: depressionData,
      },
      {
        type: 'spline',
        name: 'Anixiety',
        color: '#aa4643',
        data: anxietyData,
      },
    ],
    xAxis: {
      categories: categories,
    },
    yAxis: {
      floor: 0,
      ceiling: 10,
      title: {
        text: '',
      },
    },
    chart: {
      backgroundColor: 'transparent',
      type: 'line',
    },
  }
  const { getLessonDetail } = useData()
  const lesson = getLessonDetail(String(currentLessonId))
  if (!lesson) return null

  let percent = '0'
  if (lessonProgress[currentLessonId] != undefined) {
    percent = Number((lessonProgress[currentLessonId]?.last_unit_completed / lesson.units.length) * 100).toFixed()
  }
  const bgImageStyle = `url(${lesson?.hero_url}) center center / cover no-repeat transparent`

  return (
    <>
      <div className="container mx-auto flex justify-center pt-24 md:pt-36 pb-12 overflow-x-auto">
        <div className="mx-0 md:mx-4 w-full block md:inline-flex">
          <div className="w-full md:w-3/5 px-4 border-r">
            <div className="h-[250px] p-2 bg-gray-200 ">
              <div className="h-full" style={{ background: bgImageStyle }}>
                <div className="w-[230px] p-4">
                  <div className="w-14 h-14 text-5xl font-bold bg-[#7cbe54] rounded text-white text-center align-middle">
                    {currentLessonId}
                  </div>
                  <p className="text-2xl text-white py-2 font-bold">{`LESSON ${currentLessonId}`}</p>
                  <p className="text-2xl text-white underline">{lesson?.title}</p>
                </div>
              </div>
            </div>
            <ActivityLesson
              type="lesson"
              percent={Number(percent)}
              lessonId={currentLessonId}
              unitId={lessonProgress[currentLessonId]?.last_unit_completed}
              practiceId="0"
              content=""
            />
            {lesson.practices.map((lessonPractice) => {
              const practice = getPracticeDetail(lessonPractice.practiceId)
              const progress: any = _.find(practiceProgress, { practice_id: lessonPractice.practiceId })

              return (
                <ActivityLesson
                  key={practice?.id}
                  type={practice?.isReadingMaterial == true ? 'tips' : 'practice'}
                  content={practice?.title}
                  lessonId={currentLessonId}
                  practiceId={String(lessonPractice.practiceId)}
                  unitId={practice?.id}
                  percent={progress == undefined ? 0 : progress?.completedCount}
                />
              )
            })}
          </div>
          <div className="w-full md:w-2/5 px-4 mb-4">
            <h1 className="text-xl text-blue-400 my-6 mb:my-2 ml-4">Your Mood Ratings</h1>
            <div className="mb-4">
              {categories.length != 0 ? (
                <HighchartsReact constructorType={'chart'} options={options} highcharts={Highcharts} />
              ) : (
                <div>There is no tracking data for anxiety and depression</div>
              )}
            </div>
            <ActivityCard type="login" duration="27 minutes" examTitle="" />
            <ActivityCard type="login" duration="1 hour ago" examTitle="" />
            <ActivityCard type="exam" duration="1 hour" examTitle="Rational Alternatives" />
            <ActivityCard type="unlock" duration="2 hour" examTitle="Rational Alternatives" />

            <Button className="mt-4 text-white" color="info" size="sm">
              View All
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
