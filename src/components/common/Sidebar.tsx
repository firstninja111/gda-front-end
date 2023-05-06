import { Menu } from 'react-daisyui'
import { Link } from 'react-router-dom'

export type LessonSidebarProps = {
  title: string
  items: {
    name: string
    to: string
    unitId?: string
    disabled?: boolean
    isActive?: boolean
  }[]
  lastUnitCompleted?: number
}

const Sidebar = ({ title, items, lastUnitCompleted }: LessonSidebarProps) => {
  return (
    <div className="hidden md:block mr-3">
      <Menu>
        <Menu.Title className="bg-[#7cbe54] text-xl font-medium text-white py-3 px-2">{title}</Menu.Title>
        {items.map((item) => (
          <Menu.Item
            key={item.name}
            className={`w-60 text-gray-600 font-medium border-b ${item.isActive ? 'bg-indigo-300' : ''}`}
            disabled={Number(item.unitId) > Number(lastUnitCompleted) + 1}
          >
            <Link key={item.name} to={item.disabled ? '' : item.to}>
              {item.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}

export default Sidebar
