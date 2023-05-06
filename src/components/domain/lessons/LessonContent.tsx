import { Link } from 'react-router-dom'

export type LessonContentProps = {
  title: string
  content: {
    unitNo: string
    title: string
  }[]
  last_unit_completed: number
}

function LessonContent({ title, content, last_unit_completed }: LessonContentProps) {
  return (
    <div className="w-full p-2">
      <h1 className="my-2 font-bold text-2xl text-[#7cbe54]">{title}</h1>
      <ul className="list-disc ml-8">
        {content.map((item) => (
          <li key={item.unitNo}>
            <Link
              className={`${
                Number(item.unitNo) <= last_unit_completed ? 'text-gray-600 font-medium underline' : 'text-gray-500'
              } text-lg`}
              to={`${Number(item.unitNo) <= last_unit_completed ? `units/${item.unitNo}` : ''}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LessonContent
