import CleanArchitectureIcon from "../components/icons/CleanArchitectureIcon"
import NodeJsIcon from "../components/icons/NodeJsIcon"
import ReactIcon from "../components/icons/ReactIcon"
import TypescriptIcon from "../components/icons/TypescriptIcon"
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
    icon: NodeJsIcon,
    selected: false
  },
  {
    skill: 'Typescript',
    icon: TypescriptIcon,
    selected: false
  },
  {
    skill: 'Clean Architecture',
    icon: CleanArchitectureIcon,
    selected: false
  },
]