import { Progress } from 'react-daisyui'

export type LessonOverviewProps = {
  title: string
  takeAways: string[]
  progress: number
}

function LessonOverview({ title, takeAways, progress }: LessonOverviewProps) {
  return (
    <div className="w-full p-2">
      <h1 className="my-2 font-bold text-2xl text-[#7cbe54]">{title}</h1>
      <div className="flex">
        <div className="w-56 hidden md:block">
          <h2 className="text-lg font-medium">Progress: {progress}% Complete</h2>
          <Progress className="bg-[#cfcefc] progress progress-primary w-56" value={progress} max="100" />
          <p className="text-gray-600">You are making good progress. Keep up the good work!</p>
        </div>
        <div className="ml-8">
          <h2 className="text-lg font-medium">Takeaways</h2>
          <ul className="list-disc text-gray-600">
            {takeAways.map((takeAway) => (
              <li key={takeAway}>{takeAway}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LessonOverview
