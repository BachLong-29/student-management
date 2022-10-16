import React from 'react'
import { Grid, Header, Progress, Statistic } from 'semantic-ui-react'

const General = () => {
    const coachStas = [
        {
            criteria: 'Class',
            point: 98,
            color: 'red'
        },
        {
            criteria: 'Antagonists',
            point: 60,
            color: 'orange'
        },
        {
            criteria: 'IQ',
            point: 80,
            color: 'yellow'
        },
        {
            criteria: 'Team-work',
            point: 75,
            color: 'olive'
        },
        {
            criteria: 'Concentration',
            point: 90,
            color: 'green'
        },
    ]
  return (
    <>
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <Statistic size='tiny' color='green'>
                        <Statistic.Label>ID:</Statistic.Label>
                        <Statistic.Value>2911000</Statistic.Value>
                    </Statistic>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Statistic size='tiny' color='green'>
                        <Statistic.Label>Full-Name:</Statistic.Label>
                        <Statistic.Value>Pep Guardiola</Statistic.Value>
                    </Statistic>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        {coachStas && coachStas.map((criteria) => {
            return (
                <>
                    <Header as="h3">{criteria.criteria}</Header>
                    <Progress percent={criteria.point} color={criteria.color} size='small'/>
                </>
            );
        })}
        
    </>
  )
}

export default General