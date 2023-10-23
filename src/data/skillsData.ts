import ReactIcon from "../components/icons/ReactIcon"
import VueIcon from "../components/icons/VueIcon"

export type Skill = {
  skill: string,
  icon: React.FC | undefined,
  selected: boolean
}

export const skillsData: Array<Skill> = [
  {
    skill: 'Vue',
    icon: VueIcon,
    selected: false
  },
  {
    skill: 'React',
    icon: ReactIcon,
    selected: false
  },
  {
    skill: 'Nodejs',
    icon: undefined,
    selected: false
  },
]