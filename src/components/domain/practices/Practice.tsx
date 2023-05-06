import Reading from '../review/Reading'
import type { PracticeSingle } from '../../../types/practice'
import Thought from '~/components/domain/practices/actual/Thought'
import Event from '~/components/domain/practices/actual/Event'
import AutomaticThought from '~/components/domain/practices/actual/AutomaticThought'
import AutoThoughtCogErrors from './actual/AutoThoughtCogErrors'
import Activity from '~/components/domain/practices/actual/Activity'
import RationalAlternatives from '~/components/domain/practices/actual/RationalAlternatives'
import ExamineEvidence from '~/components/domain/practices/actual/ExamineEvidence'
import ThoughtChangeRecord from './actual/ThoughtChangeRecord'
import Task from '~/components/domain/practices/actual/Task'
import ChangingSchema from '~/components/domain/practices/actual/ChangingSchema'
import CopingCards from '~/components/domain/practices/actual/CopingCards'
import BehaviorChange from './actual/BehaviorChange'
import NegativeSchemaUpdate from './actual/NegativeSchemaUpdate'

export type PracticeProps = {
  practice: PracticeSingle
  handleBackList: () => void
  handleNext: () => void
  handlePrev: () => void
  isLastPractice: boolean
  isLastLesson: boolean
}

const Practice = ({
  practice,
  handleBackList,
  handleNext,
  handlePrev,
  isLastPractice,
  isLastLesson,
}: PracticeProps) => {
  return (
    <div>
      {(() => {
        if (practice.isReadingMaterial === true) {
          return (
            <Reading
              practice={practice}
              handlePrev={handlePrev}
              handleNext={handleNext}
              isLastPractice={isLastPractice}
              isLastLesson={isLastLesson}
            />
          )
        }
        switch (practice.cognitionType) {
          case 'Rpt':
          case 'Rnt':
          case 'Nsr':
          case 'Psr':
            return <Thought practice={practice} handlePrev={handlePrev} handleNext={handleNext} />
          case 'Cnt':
            return <AutomaticThought practice={practice} handleNext={handleNext} handlePrev={handlePrev} />

          case 'Twce':
            return <AutoThoughtCogErrors practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'TcrFourStep':
            return <Event practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'Ete':
            return <ExamineEvidence practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'Rat':
            return <RationalAlternatives practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'Tcr':
            return <ThoughtChangeRecord practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'activity_schedules':
            return <Activity practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'tasks':
            return <Task practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'Csr':
            return <ChangingSchema practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'coping_cards':
            return <CopingCards practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'behavior_change_plans':
            return <BehaviorChange practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
          case 'Nsjr':
            return <NegativeSchemaUpdate practice={practice} handleNext={handleNext} handlePrev={handlePrev} />
        }
      })()}
    </div>
  )
}

export default Practice
