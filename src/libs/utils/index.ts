import { lessons } from "~/data/lessons";
import _ from 'lodash'

export const getNextPracticeId = (lessonId: string | undefined, currentId: string | undefined) => {
    let nextId = -1;

    if (!lessonId) {
        return nextId
    }
    if (!currentId) {
        return nextId
    }
    const lesson = _.find(lessons, { lessonNo: lessonId })

    lesson?.practices.map((lessonPractice, index) => {
        if (lessonPractice.practiceId == Number(currentId)) {
            if (index != lesson.practices.length - 1) {
                nextId = lesson.practices[index + 1].practiceId
            }
        }
    })
    
    return nextId
}
export const getPrevPracticeId = (lessonId: string | undefined, currentId: string | undefined) => {
    let prevId = -1;

    if (!lessonId) {
        return prevId
    }
    if (!currentId) {
        return prevId
    }
    const lesson = _.find(lessons, { lessonNo: lessonId })
    
    lesson?.practices.map((lessonPractice, index) => {
        if (lessonPractice.practiceId == Number(currentId)) {
            if (index != 0) {
                prevId = lesson.practices[index - 1].practiceId
            }
        }
    })
    
    return prevId
}