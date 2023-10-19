import { Box } from "@mui/material"
import { useState } from "react"

export const MyImage: React.FC<{ src: string }> = ({ src }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const cssImg: React.CSSProperties & { '&:hover'?: unknown } = {
    height: '60vh',
    width: '100%',
    objectFit: 'cover',
    filter: !isHovering ? 'drop-shadow(16px 16px 15px #4444dd7a)' : 'drop-shadow(16px 16px 15px #4444ddee)',
    transition: '0.8s',
  }

  const cssDivImg = {
    position: 'relative',
    ":before": {
      content: '""',
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      width: '30%',
      height: '30%',
      border: '1px solid rgb(26, 158, 26)',
      borderRight: 'none',
      borderBottom: 'none',
      borderWidth: '2px',
      borderRadius: '10px 0 0 0',
      boxShadow: '-10px -10px 10px rgba(26, 158, 26, 0.5)',
      transition: '0.8s',
      background: 'transparent'
    },
    ":hover": {
      ":before": {
        boxShadow: '-10px -10px 20px 5px rgba(26, 158, 26, 0.8)'
      }
    }
  }

  return (
    <Box component="div" sx={cssDivImg} >
      <img id="me-img" src={src} alt="me"
        style={cssImg}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Box>
  )
}