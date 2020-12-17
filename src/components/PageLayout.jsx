import  React from 'react';
import { Container, Grid, Typography, Card, CardHeader, CardContent, AppBar, Button } from '@material-ui/core';

const cardHeader =[
  'Card One Header',
  'Card Two Header',
  'Card Three Header',
  'Card Four Header',
  'Card Five Header',
  'Card Six Header'
]

const cardSubHeader = [
  'Card One Subheader',
  'Card Two Subheader',
  'Card Three Subheader',
  'Card Four Subheader',
  'Card Five Subheader',
  'Card Six Subheader',
]

const cardContent = [
  'Pirate ipsum dolor sit amet, Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crows nest nipperkin grog yardarm hempen halter furl.Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.',
  'Cupcake ipsum dolor sit amet, aramels halvah cheesecake donut chocolate sweet roll. Toffee halvah pastry tootsie roll cake. Chupa chups gingerbread gummies wafer sesame snaps.',
  'Sagan ipsum dolor sit amet, Not a sunrise but a galaxyrise a mote of dust suspended in a sunbeam Sea of Tranquility stirred by starlight concept of the number one hearts of the stars and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
  'Cat ipsum dolor sit amet, i shredded your linens for you and stare at ceiling meow to be let out yet jump five feet high and sideways when a shadow moves',
  'Lit ipsum dolor sit amet,  Her astonishment, however, was extreme, and continually was she repeating, “Why is he so altered? From what can it proceed? It cannot be for me--it cannot be for my sake that his manners are thus softened. My reproofs at Hunsford could not work such a change as this. It is impossible that he should still love me.”',
  'Space ipsum dolor sit amet, Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.'
]

class PageLayout extends React.Component {

  constructor(props) {
    super(props) 
    this.state ={
      toggle: true,
      singer: 'Nat King Cole'
    }
  }

  handleClick() {
    this.state = {
      toggle: !state.toggle,
      singer: this.state.toggle ? 'Ella Fitzgerald' : 'Nat King Cole'
    };
  }

  render() {
    return (
      <Container>
        <AppBar position="static" color="primary">
          <Typography variant="h5">Welcome to the expedia group react interview</Typography>
          <Typography variant="body2">This project was created by engineers to go over basic react skills and assess basic problem solving and teamwork skills. There are multiple steps to this project, which your interviewer has. We don't expect you to get every step, we want to see how you think and work. Thank you for participating.</Typography>
        </AppBar>
        <Typography variant="h4">My Favorite Music Artist is: {state.singer} </Typography>
        <Grid>
          <Card variant="outlined" raised={true} role="card">
            <CardHeader title={cardHeader[0]} subheader={cardSubHeader[0]} />
            <CardContent>{cardContent[0]}</CardContent>
            <Button size="small" variant="contained" color="secondary" onClick={handleClick()}>Click Me!</Button>
          </Card>
          <Card variant="outlined" raised={true} role="card">
            <CardHeader title={cardHeader[1]} subheader={cardSubHeader[1]} />
            <CardContent>{cardContent[1]}</CardContent>
            <Button size="small" variant="contained" color="secondary" onClick={handleClick()}>Click Me!</Button>
          </Card>
          <Card variant="outlined" raised={true} role="card">
            <CardHeader title={cardHeader[2]} subheader={cardSubHeader[2]} />
            <CardContent>{cardContent[2]}</CardContent>
            <Button size="small" variant="contained" color="secondary" onClick={handleClick()}>Click Me!</Button>
          </Card>
          <Card variant="outlined" raised={true} role="card">
            <CardHeader title={cardHeader[3]} subheader={cardSubHeader[3]} />
            <CardContent>{cardContent[3]}</CardContent>
            <Button size="small" variant="contained" color="secondary" onClick={handleClick()}>Click Me!</Button>
          </Card>
          <Card variant="outlined" raised={true} role="card">
            <CardHeader title={cardHeader[4]} subheader={cardSubHeader[4]} />
            <CardContent>{cardContent[4]}</CardContent>
            <Button size="small" variant="contained" color="secondary" onClick={handleClick()}>Click Me!</Button>
          </Card>
          <Card variant="outlined" raised={true} role="card">
            <CardHeader title={cardHeader[5]} subheader={cardSubHeader[5]} />
            <CardContent>{cardContent[5]}</CardContent>
            <Button size="small" variant="contained" color="secondary" onClick={handleClick()}>Click Me!</Button>
          </Card>
        </Grid>

      </Container>
    )
  }
}

export default PageLayout;