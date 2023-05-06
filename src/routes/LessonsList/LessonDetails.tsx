import { useParams, useSearchParams } from 'react-router-dom'
import { Tabs } from 'react-daisyui'
import { useState } from 'react'
import { useData } from '~/context/DataContext'

import { LessonCard, LessonOverview, LessonContent, LessonPractice } from '~/components/domain/lessons'

export type LessonDetailProps = {
  lessonProgress: any
  practiceProgress: any
  navigateLessonDetail: (action: string, lessonNo: string, lastUnitCompleted: number, percent: number) => void
}

function LessonDetailView({ lessonProgress, practiceProgress, navigateLessonDetail }: LessonDetailProps) {
  const { lessonId: id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const { getLessonDetail, getContent, getLessonPractices } = useData()

  const lesson = getLessonDetail(id)
  const [activeTab, setActiveTab] = useState(parseInt(searchParams.get('tab') || '0'))

  if (!lesson) return null

  const content = getContent(id)
  const lessonPractices = getLessonPractices(id)

  const { lessonNo, hero_url, title, takeAways } = lesson
  const percent = Number(
    (lessonProgress == undefined || lessonProgress[lessonNo] == undefined
      ? 0
      : (lessonProgress[lessonNo].last_unit_completed / lesson.units.length) * 100
    ).toFixed(),
  )

  const handleTabChange = (index: number) => {
    setActiveTab(index)
    setSearchParams({ tab: `${index}` })
  }

  const getActiveTab = (index: number) => {
    switch (index) {
      case 1:
        return (
          <LessonContent
            key={1}
            title={`Lesson ${lessonNo} Table of Contents`}
            content={content}
            last_unit_completed={lessonProgress[lessonNo]?.last_unit_completed}
          />
        )
      case 2:
        return (
          <LessonPractice
            key={2}
            lessonId={lessonNo}
            title={`Lesson ${lessonNo} Practice`}
            practices={lessonPractices}
            practiceProgress={practiceProgress}
          />
        )
      default:
        return <LessonOverview key={0} title={`Lesson ${lessonNo} Overview`} takeAways={takeAways} progress={percent} />
    }
  }

  return (
    <div className="w-full">
      <h1 className="text-lg py-3 px-2 font-bold bg-gray-100 text-[#596f8d] dark:bg-transparent dark:text-gray-400">
        {`Lesson ${lessonNo}. ${title}`}
      </h1>
      <LessonCard
        key={`lesson-${lesson.lessonNo}`}
        lessonProgress={lessonProgress}
        lesson={lesson}
        navigateLessonDetail={navigateLessonDetail}
        showNavigiator
      />
      <div>
        <Tabs size="lg" variant="bordered" value={activeTab} onChange={handleTabChange} className="flex">
          <Tabs.Tab key={0} value={0} className="text-lg font-medium flex-1">
            Overview
          </Tabs.Tab>
          <Tabs.Tab key={1} value={1} className="text-lg font-medium flex-1">
            Content
          </Tabs.Tab>
          <Tabs.Tab key={2} value={2} className="text-lg font-medium flex-1">
            Practice
          </Tabs.Tab>
        </Tabs>
        {getActiveTab(activeTab)}
      </div>
    </div>
  )
}

export default LessonDetailView
