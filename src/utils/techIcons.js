import BoltIcon from '@mui/icons-material/Bolt'
import StorageIcon from '@mui/icons-material/Storage'
import StyleIcon from '@mui/icons-material/Style'
import ImageIcon from '@mui/icons-material/Image'
import WidgetsIcon from '@mui/icons-material/Widgets'
import CodeIcon from '@mui/icons-material/Code'

export const TECH_ICONS = {
  React: BoltIcon,
  Supabase: StorageIcon,
  PostgreSQL: StorageIcon,
  CSS3: StyleIcon,
  'Unsplash API': ImageIcon,
  MUI: WidgetsIcon,
  default: CodeIcon,
}

export const getTechIcon = (tech) => TECH_ICONS[tech] ?? TECH_ICONS.default
