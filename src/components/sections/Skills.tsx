import { Box, Chip, Container, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { skillsData, Skill } from '../../data/skillsData'
import { useState } from 'react'
import { TitleDivider } from '../shared'

export const Skills: React.FC = () => {
  const [skills, setSkills] = useState(skillsData)

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSkillsList = skillsData.filter((skill) => {
      const searchText = e.target.value.trim().toLowerCase()
      return skill.skill.trim().toLowerCase().includes(searchText)
        || skill.selected
    })
    setSkills(newSkillsList)
  }

  const handleClickChip = (clickedSkill: Skill) => {
    const clickedSkillsIndex = skills.indexOf(clickedSkill)
    skills[clickedSkillsIndex].selected = !clickedSkill.selected
    setSkills([...skills])
  }

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={5} >
        <Grid xs={12}>
          <TitleDivider text='Skills - Conhecimentos'></TitleDivider>
        </Grid>

        <Grid xs={6}>
          <TextField fullWidth label='Pesquisar' variant="outlined" onChange={filter} />

          <Box flexWrap='wrap' display='flex' justifyContent='space-between' mt={3}>
            {skills.map((skill, index) => (
            <Chip
              key={index}
              icon={skill.icon ? <skill.icon /> : undefined}
              label={skill.skill}
              sx={{ m: 1, borderRadius: 24, p: 3, fontSize: '1rem' }}
              color={skill.selected ? 'primary' : 'default'}
              onClick={() => handleClickChip(skill)}
            />
          ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}