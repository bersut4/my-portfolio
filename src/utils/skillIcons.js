import DesignServicesIcon from '@mui/icons-material/DesignServices'
import ImageIcon from '@mui/icons-material/Image'
import BrushIcon from '@mui/icons-material/Brush'
import HtmlIcon from '@mui/icons-material/Html'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import DataObjectIcon from '@mui/icons-material/DataObject'
import WidgetsIcon from '@mui/icons-material/Widgets'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import DnsIcon from '@mui/icons-material/Dns'
import MemoryIcon from '@mui/icons-material/Memory'
import LocalCafeIcon from '@mui/icons-material/LocalCafe'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import StorageIcon from '@mui/icons-material/Storage'
import CodeIcon from '@mui/icons-material/Code'

export const SKILL_ICONS = {
  Figma: DesignServicesIcon,
  Photoshop: ImageIcon,
  Illustrator: BrushIcon,
  'HTML/CSS': HtmlIcon,
  'AI 바이브 코딩': AutoAwesomeIcon,
  'Vue.js': DataObjectIcon,
  Angular: WidgetsIcon,
  TypeScript: IntegrationInstructionsIcon,
  'Node.js': DnsIcon,
  Python: MemoryIcon,
  Java: LocalCafeIcon,
  Git: AccountTreeIcon,
  'React Native': PhoneIphoneIcon,
  MongoDB: StorageIcon,
  default: CodeIcon,
}

export const getSkillIcon = (name) => SKILL_ICONS[name] ?? SKILL_ICONS.default
