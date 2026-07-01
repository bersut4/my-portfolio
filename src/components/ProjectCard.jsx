import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import LaunchIcon from '@mui/icons-material/Launch'
import { getTechIcon } from '../utils/techIcons'

const ProjectCard = ({ project }) => {
  const { title, description, tech_stack: techStack = [], detail_url: detailUrl, thumbnail_url: thumbnailUrl } = project

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.02)',
          boxShadow: '0 12px 32px rgba(200,160,86,0.25)',
          borderColor: 'var(--color-border-gold)',
        },
        '&:active': { transform: 'translateY(-2px) scale(0.99)' },
      }}
    >
      <Box
        component="a"
        href={detailUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} 사이트 새 탭에서 열기`}
        sx={{
          display: 'block',
          position: 'relative',
          width: '100%',
          pt: '56.25%',
          overflow: 'hidden',
          backgroundColor: 'var(--color-bg-primary)',
          '&:hover img': { transform: 'scale(1.08)' },
        }}
      >
        <Box
          component="img"
          src={thumbnailUrl}
          alt={`${title} 스크린샷`}
          loading="lazy"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            transition: 'transform 0.4s ease',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h3" sx={{ fontSize: '1.15rem', mb: 1, color: 'var(--color-text-primary)' }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'var(--color-text-secondary)',
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {techStack.map((tech) => {
            const Icon = getTechIcon(tech)
            return (
              <Chip
                key={tech}
                icon={<Icon sx={{ fontSize: '16px !important' }} />}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: 'rgba(200,160,86,0.12)',
                  color: 'var(--color-secondary)',
                  border: '1px solid rgba(200,160,86,0.3)',
                }}
              />
            )
          })}
        </Box>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          endIcon={<LaunchIcon />}
          href={detailUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'var(--color-secondary)',
            borderColor: 'var(--color-secondary)',
            '&:hover': { borderColor: 'var(--color-button-hover)', backgroundColor: 'rgba(200,160,86,0.08)' },
          }}
        >
          Live Demo 보기
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard
