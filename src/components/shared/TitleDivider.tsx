import { Divider, SxProps } from "@mui/material"

export const TitleDivider: React.FC<{ text: string }> = ({ text }) => {
  const style: SxProps = {
    color: '#fff',
    ":before, :after": {
      borderTop: '2px solid rgb(26, 158, 26)'
    }
  }

  return (
    <Divider textAlign="left" sx={style}>
      {text}
    </Divider>
  )
}