import { Box, Chip, Container, LinearProgress, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { skillsData, Skill } from '../../data/skillsData'
import { useState } from 'react'
import { TitleDivider } from '../shared'
import CodeIcon from '@mui/icons-material/Code';

export const Skills: React.FC = () => {
  const [skills, setSkills] = useState(
    skillsData.sort((a, b) => {
      if (a.rating < b.rating) return 1
      if (a.rating > b.rating) return -1
      if (a.skill > b.skill) return 1
      return -1
    })
  )

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
          <TitleDivider text='Competências'></TitleDivider>
        </Grid>

        <Grid xs={6}>
          <TextField fullWidth label='Pesquisar' variant="outlined" onChange={filter} />

          <Box justifyContent='space-between' mt={3}>
            {skills.map((skill, index) => (
              <Chip
                key={index}
                icon={skill.icon ? <skill.icon size={30} /> : undefined}
                label={skill.skill}
                sx={{ m: 1, borderRadius: 24, p: 3, fontSize: '1rem' }}
                color={skill.selected ? 'primary' : 'default'}
                onClick={() => handleClickChip(skill)}
              />
            ))}
          </Box>
        </Grid>

        <Grid container xs={6} alignItems={'baseline'} direction={'column'} spacing={1}>

          {
            skills.filter(skill => skill.selected == true).map((skill, index) => (

              <Grid container xs={12} alignItems={'center'} key={index}>
                <Grid xs={4}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {
                      skill.icon ? (<skill.icon size={45} sx={{ mr: 2 }} />) : (<CodeIcon sx={{mr: 2, fontSize: 45}} />)
                    }
                    {skill.skill}
                  </div>
                </Grid>
                <Grid xs={8}>
                    <LinearProgress variant="determinate" value={skill.rating * 100 / 5} color='warning' />
                </Grid>
              </Grid>

            ))
          }

        </Grid>
      </Grid>
    </Container>
  )
}