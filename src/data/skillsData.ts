import CleanArchitectureIcon from "../components/icons/CleanArchitectureIcon"
import { IconProperties } from "../components/icons/IconProperties"
import NodeJsIcon from "../components/icons/NodeJsIcon"
import ReactIcon from "../components/icons/ReactIcon"
import TypescriptIcon from "../components/icons/TypescriptIcon"
import VueIcon from "../components/icons/VueIcon"

export type Skill = {
  skill: string,
  icon: React.FC<IconProperties> | undefined,
  selected: boolean
  rating: number
}

export const skillsData: Array<Skill> = [
  {
    skill: 'Vue',
    icon: VueIcon,
    selected: false,
    rating: 3
  },
  {
    skill: 'React',
    icon: ReactIcon,
    selected: false,
    rating: 1
  },
  {
    skill: 'Nodejs',
    icon: NodeJsIcon,
    selected: true,
    rating: 5
  },
  {
    skill: 'Typescript',
    icon: TypescriptIcon,
    selected: true,
    rating: 5
  },
  {
    skill: 'Clean Architecture',
    icon: CleanArchitectureIcon,
    selected: true,
    rating: 4
  },
  {
    skill: 'PHP',
    icon: undefined,
    selected: false,
    rating: 4
  },
  {
    skill: 'Laravel',
    icon: undefined,
    selected: false,
    rating: 4
  },
  {
    skill: 'Backend',
    icon: undefined,
    selected: true,
    rating: 5
  },
  {
    skill: 'Frontend',
    icon: undefined,
    selected: false,
    rating: 3
  },
  {
    skill: 'Redis',
    icon: undefined,
    selected: false,
    rating: 2
  },
  {
    skill: 'Kafka',
    icon: undefined,
    selected: false,
    rating: 2
  },
  {
    skill: 'MongoDB',
    icon: undefined,
    selected: false,
    rating: 4
  },
  {
    skill: 'MYSQL',
    icon: undefined,
    selected: false,
    rating: 4
  },
]