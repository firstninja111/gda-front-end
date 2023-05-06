import { useState } from 'react'
import { Button, Card } from 'react-daisyui'
import { Link } from 'react-router-dom'
import { BiBadgeCheck } from 'react-icons/bi'
import { FaBan } from 'react-icons/fa'
import { PracticeSingle } from '../../../types/practice'

export type PracticeCardProps = {
  practice: PracticeSingle | undefined
  blocked: boolean
  progress: any
  lessonId: string
}

const PracticeCard = ({ practice, blocked, progress, lessonId }: PracticeCardProps) => {
  return (
    <Card className="w-full flex justify-end my-1 border-none rounded-none">
      <div className="flex items-center border-b py-4 w-full">
        <div className="mr-4 w-full">
          <p className="font-medium text-lg text-gray-700">{practice?.title}</p>
          <p className="font-medium text-gray-500">{practice?.practice?.[0]?.summary}</p>
          {blocked && !practice?.isReadingMaterial && (
            <div className="flex justify-end items-center text-gray-500 text-sm mt-2">
              <FaBan className="text-gray-500 w-6" />
              <span>Not Activated yet</span>
            </div>
          )}
          {!blocked && !practice?.isReadingMaterial && (
            <div className="flex justify-end items-center text-gray-500 text-sm mt-2">
              <BiBadgeCheck className="text-lg text-gray-500 w-6" />
              <span>{progress == undefined ? 'Not Completed yet' : `Completed ${progress?.completedCount} times`}</span>
            </div>
          )}

          <div className="flex mt-1 justify-end">
            <Link to={`${blocked && !practice?.isReadingMaterial ? '' : `/practice/${lessonId}/${practice?.id}`}`}>
              <Button
                size="sm"
                className={`${
                  blocked && !practice?.isReadingMaterial
                    ? 'from-[#8f8686] to-[#c2c2c2]'
                    : 'from-[#762477] to-[#9794f9] '
                } bg-gradient-to-tr border-none`}
              >
                {practice?.isReadingMaterial ? 'Read' : 'Start'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PracticeCard
