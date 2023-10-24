import { Card, CardContent, Container, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { TitleDivider } from '../shared'
import { experiencesData } from '../../data/experiencesData'
import { useState } from 'react'

export const Experience: React.FC = () => {
  const styles = {
    p: {
      textAlign: 'justify',
      lineHeight: '42px',
      fontSize: '1.3rem'
    }
  }

  const experiences = experiencesData
  const [currentExperience, setCurrentExperience] = useState(experiences[0])
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0)

  const changeCurrentExperience = (index: number) => {
    setCurrentExperienceIndex(index)
    setCurrentExperience(experiences[index])
  }


  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <TitleDivider text='Experiências'></TitleDivider>
        </Grid>

        <Grid xs={3}>
          <List sx={{ bgcolor: 'background.paper' }}>
            {
              experiences.map((exp, index) => (
                <ListItemButton key={index} onClick={() => changeCurrentExperience(index)}
                  sx={{ backgroundColor: index == currentExperienceIndex ? '#4444ddee' : '' }}
                >
                  <ListItemText primary={exp.company} />
                </ListItemButton>
              ))
            }
          </List>
        </Grid>

        <Grid xs={9}>
          <Card >
            <CardContent>

              <Typography variant="subtitle1" textAlign='left'>
                {currentExperience.role}
              </Typography>
              {currentExperience.period}

              <Typography variant="body1" mt={3} sx={styles.p} dangerouslySetInnerHTML={{ __html: currentExperience.description }}>
              </Typography>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}