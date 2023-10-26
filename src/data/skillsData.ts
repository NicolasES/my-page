import CleanArchitectureIcon from "../components/icons/CleanArchitectureIcon"
import { IconProperties } from "../components/icons/IconProperties"
import JestIcon from "../components/icons/JestIcon"
import MongoDBIcon from "../components/icons/MongoDBIcon"
import MysqlIcon from "../components/icons/MysqlIcon"
import NestjsIcon from "../components/icons/NestjsIcon"
import NodeJsIcon from "../components/icons/NodeJsIcon"
import PHPIcon from "../components/icons/PHPIcon"
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
    icon: PHPIcon,
    selected: false,
    rating: 4
  },
  {
    skill: 'Laravel',
    icon: undefined,
    selected: false,
    rating: 3
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
    icon: MongoDBIcon,
    selected: false,
    rating: 4
  },
  {
    skill: 'MYSQL',
    icon: MysqlIcon,
    selected: false,
    rating: 4
  },
  {
    skill: 'Jest',
    icon: JestIcon,
    selected: false,
    rating: 4
  },
  {
    skill: 'DDD',
    icon: CleanArchitectureIcon,
    selected: false,
    rating: 2
  },
  {
    skill: 'NestJS',
    icon: NestjsIcon,
    selected: false,
    rating: 3
  },
]