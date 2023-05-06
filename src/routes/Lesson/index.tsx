import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-daisyui'
import React, { useMemo, useState, useEffect } from 'react'
import { LessonVideo, LessonQuiz } from '~/components/domain/lessons'
import { Sidebar } from '~/components/common'
import { useAuth } from '~/context/AuthContext'
import { useStripe } from '~/context/StripeContext'
import { useQuery } from 'react-query'
import { useData } from '~/context/DataContext'
import Stripe from '~/components/Modal/Stripe'
import { QuizItem } from '~/types/lesson'

function LessonPage() {
  const param = useParams()
  const { lessonId, unitId, quizId } = param
  const { getLessonProgress, updateLessonProgress, getProfile } = useAuth()
  const { getSubscription } = useStripe()
  const navigate = useNavigate()
  const [isSubmit, setIsSubmit] = useState(quizId == undefined ? false : true)
  const [answer, selectAnswer] = useState(false)
  const [error, setError] = useState(false)
  const [stripeVisible, setStripeVisible] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [lastUnitCompleted, setLastUnitCompleted] = useState(0)

  window.scrollTo(0, 0)

  const { getLessonDetail, getLessonUnit } = useData()
  const lesson = getLessonDetail(lessonId)

  if (!lesson) return null

  // @ts-ignore
  const unit = getLessonUnit(lessonId, unitId)
  if (!unit) return null

  let quiz: QuizItem | undefined
  let correctCount: number = 0
  if (quizId) {
    // @ts-ignore
    quiz = unit.quizzes[Number(quizId) - 1]
    if (!quiz) return null
    if (quiz.options) {
      const correctOptions = quiz.options.filter((item) => item.correct)
      if (correctOptions) {
        correctCount = correctOptions.length
      }
    }
  }

  const nextRoute = useMemo(() => {
    let unitNo = Number(unitId)
    let quizNo = quizId ? Number(quizId) : 0

    if (unit.quizzes) {
      if (quizNo) {
        quizNo++
        if (quizNo > unit.quizzes.length) {
          unitNo++
          quizNo = 0
        }
      } else {
        quizNo = 1
      }
    } else {
      unitNo++
    }

    if (unitNo > lesson.units.length) {
      unitNo = 0
    }

    if (!unitNo) return ''
    if (!quizNo) return `/lessons/${lessonId}/units/${unitNo}`
    return `/lessons/${lessonId}/units/${unitNo}/quizzes/${quizNo}`
  }, [unitId, quizId, unit, lesson])

  const prevRoute = useMemo(() => {
    let unitNo = Number(unitId)
    let quizNo = quizId ? Number(quizId) : 0

    if (quizNo) {
      quizNo--
    } else {
      unitNo--
    }

    if (unitNo !== Number(unitId)) {
      // @ts-ignore
      const prevUnit = getLessonUnit(lessonId, unitNo.toString())

      if (prevUnit?.quizzes) {
        quizNo = prevUnit.quizzes.length
      }
    }

    if (!unitNo) return ''
    if (!quizNo) return `/lessons/${lessonId}/units/${unitNo}`
    return `/lessons/${lessonId}/units/${unitNo}/quizzes/${quizNo}`
  }, [unitId, quizId, unit, lesson])

  useEffect(() => {
    setIsSubmit(quizId == undefined ? false : true)
    setError(false)
    selectAnswer(false)
  }, [quizId])

  useEffect(() => {
    let last_unit_completed
    if (!lessonProgress || lessonProgress == undefined) {
      last_unit_completed = 0
    } else {
      last_unit_completed = Number(lessonProgress[String(lessonId)]?.last_unit_completed) | 0
    }
    setLastUnitCompleted(last_unit_completed > Number(unitId) ? last_unit_completed : Number(unitId))
  }, [unitId])

  // If user navigate manually by entering url, it checks if the previous lesson is completed

  const fetchLessonProgress = async () => {
    return await getLessonProgress()
  }

  const { data, isSuccess } = useQuery('lessonProgress', fetchLessonProgress)
  let lessonProgress: any = {}
  if (isSuccess) {
    lessonProgress = data[0]
    if (lessonId != '1' && !lessonProgress[Number(lessonId) - 1]?.completed) {
      navigate('/lessons')
    }
  }

  useQuery(['getSubscription', lessonId, unitId], async () => {
    const result = await getSubscription()
    setStripeVisible(Number(lessonId) > 1 && !result)
    setSubscribed(result)
  })
  //  Update Lesson Prgoress Database

  useQuery(['updateLessonProgress', lessonId, unitId], async () => {
    if (Number(unitId) == 1) {
      return
    }
    return await updateLessonProgress(Number(lessonId), Number(unitId), Number(unitId) == lesson.units.length)
  })

  // Get narrator info from profile
  let narrator = 'rushing'
  const profileHook = useQuery('getProfile', async () => {
    return await getProfile()
  })
  if (profileHook.isSuccess && profileHook.data[0].narrator != undefined) {
    narrator = profileHook.data[0].narrator
  }

  // Striple CloseButton Action
  const handleStripeVisible = () => {
    setStripeVisible(false)
    navigate('/lessons')
  }

  const answerChoose = () => {
    selectAnswer(true)
    setError(false)
  }
  const answerUnchoose = () => {
    selectAnswer(false)
  }
  const onSubmit = () => {
    if (!answer) {
      if (quiz?.options != undefined) {
        setError(true)
        return
      }
      setError(false)
      setIsSubmit(true)
      navigate(nextRoute)
      return
    }
    setIsSubmit(false)
  }
  return (
    <div className="container mx-auto flex justify-start pt-24 pb-12">
      <Sidebar
        title="Lesson Outline"
        items={lesson.units.map((v) => {
          return {
            name: v.title,
            to: `/lessons/${lessonId}/units/${v.unitNo}`,
            unitId: v.unitNo,
          }
        })}
        lastUnitCompleted={lastUnitCompleted}
      />
      <div className="w-full p-2">
        {!stripeVisible && (
          <>
            <h1 className="text-lg py-3 px-2 font-bold bg-gray-100 text-[#596f8d] dark:bg-transparent dark:text-gray-400">
              {unit.title}
            </h1>
            <div className="p-4 border-solid border-slate border-2">
              {quiz ? (
                <LessonQuiz
                  type={correctCount == 1 ? 'radio' : 'checkbox'}
                  quiz={quiz}
                  currentId={Number(quizId)}
                  quizCount={Number(unit.quizzes?.length)}
                  isSubmit={isSubmit}
                  answerChoose={answerChoose}
                  answerUnchoose={answerUnchoose}
                  error={error}
                />
              ) : (
                unit.content.map((content, index) => (
                  <React.Fragment key={index}>
                    <div className={`${content.type === 'video' ? 'mb-4' : ''}`}>
                      {content.type === 'video' ? (
                        // @ts-ignore
                        <LessonVideo src={content.videos?.[narrator == 'rushing' ? 1 : 2].src || ''} />
                      ) : (
                        <div className="py-2 lesson-html-content" dangerouslySetInnerHTML={{ __html: content.html }} />
                      )}
                    </div>
                  </React.Fragment>
                ))
              )}

              <div className="flex mt-3 border-t-2 p-2">
                {prevRoute && (
                  <Link to={prevRoute}>
                    <Button className="bg-gradient-to-tr from-[#762477] to-[#9794f9] border-none">Back</Button>
                  </Link>
                )}
                {nextRoute && !isSubmit && (
                  <Link to={nextRoute} className="ml-auto">
                    <Button className="bg-gradient-to-tr from-[#762477] to-[#9794f9] border-none">Next</Button>
                  </Link>
                )}
                {nextRoute && isSubmit && (
                  <Button
                    className="ml-auto bg-gradient-to-tr from-[#762477] to-[#9794f9] border-none"
                    onClick={onSubmit}
                  >
                    Submit
                  </Button>
                )}
                {!nextRoute && (
                  <Link to={`/practice/${lesson.lessonNo}/${lesson.practices[0].practiceId}`} className="ml-auto">
                    <Button className="bg-gradient-to-tr from-[#762477] to-[#9794f9] border-none">Practice</Button>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
        <Stripe visible={stripeVisible} onClose={handleStripeVisible} />
      </div>
    </div>
  )
}

export default LessonPage
