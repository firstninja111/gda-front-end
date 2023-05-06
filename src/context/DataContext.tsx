import { createContext, useContext } from 'react'
import { lessons } from '~/data/lessons'
import { practices } from '~/data/practice'
import { LessonSingle, UnitItem } from '~/types/lesson'
import { PracticeSingle } from '~/types/practice'
import _ from 'lodash'

// DataContexts provides data processing functions
const DataContext = createContext({
  getLessonDetail: (lessonId: string | undefined): LessonSingle | undefined => undefined,
  getLessonUnit: (lessonId: string | undefined, unitNo: string): UnitItem | undefined => undefined,
  getContent: (lessonId: string | undefined): { unitNo: string; title: string }[] => [],
  getLessonPractices: (
    lessonId: string | undefined,
  ): ({ id: number; isReadingMaterial?: any; title: string } | undefined)[] => [],

  getPracticeDetail: (practiceId: number): PracticeSingle | undefined => undefined,
  getPracticeList: (lessonId: string | undefined, practiceId: string | undefined): any => [],
})

// useAuth easy access to AuthContext
export const useData = () => {
  return useContext(DataContext)
}

// DataProvider provides frequently used data processing methods
export const DataProvider = ({ children }: any) => {
  const getLessonDetail = (lessonId: string | undefined) => {
    const lesson = _.find(lessons, { lessonNo: lessonId })
    return lesson
  }

  const getLessonUnit = (lessonId: string | undefined, unitNo: string) => {
    const lesson = _.find(lessons, { lessonNo: lessonId })
    const unit = _.find(lesson?.units, { unitNo: unitNo })
    return unit
  }

  const getContent = (lessonId: string | undefined) => {
    const lesson = _.find(lessons, { lessonNo: lessonId })
    const content = lesson?.units.map((unit) => ({ unitNo: unit.unitNo, title: unit.title }))
    return content
  }

  const getLessonPractices = (lessonId: string | undefined) => {
    const lesson = _.find(lessons, { lessonNo: lessonId })
    const lessonPractices = lesson?.practices.map((practice) => {
      const lessonPractice = _.find(practices, { id: practice.practiceId })
      if (!lessonPractice) return
      return {
        id: lessonPractice.id,
        isReadingMaterial: lessonPractice.isReadingMaterial,
        title: lessonPractice.title,
      }
    })
    return lessonPractices
  }

  const getPracticeDetail = (practiceId: number) => {
    const practice: PracticeSingle | any = _.find(practices, { id: practiceId })
    return practice
  }

  const getPracticeList = (lessonId: string | undefined, practiceId: string | undefined) => {
    const lesson = _.find(lessons, { lessonNo: lessonId })
    return lesson?.practices.map((practice) => {
      const practiceDetail = getPracticeDetail(practice.practiceId)
      return {
        id: practiceDetail?.id,
        name: practiceDetail?.title,
        to: `/practice/${lessonId}/${practiceDetail?.id}`,
        isReadingMaterial: practiceDetail?.isReadingMaterial,
        isActive: practiceDetail.id == practiceId,
      }
    })
  }

  // value to be provided to children
  const value: any = {
    getLessonDetail: getLessonDetail,
    getLessonUnit: getLessonUnit,
    getContent: getContent,
    getLessonPractices: getLessonPractices,
    getPracticeDetail: getPracticeDetail,
    getPracticeList: getPracticeList,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
