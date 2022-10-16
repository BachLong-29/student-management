import { Container, Header, Tab } from 'semantic-ui-react';
import './App.css';
import Class from './components/Class';
import General from './components/General';
import Student from './components/Students/Student';

function App() {
  const panes = [
    {
      menuItem: 'General Information',
      render: () => <Tab.Pane ><General /></Tab.Pane>,
    },
    {
      menuItem: 'Class Information',
      render: () => <Tab.Pane ><Class /></Tab.Pane>,
    },
    {
      menuItem: 'Student Information',
      render: () => <Tab.Pane ><Student /></Tab.Pane>,
    },
  ];
  return (
    <Container>
      <Header style={{padding: '10px 8px', margin: '0'}} textAlign='center'>University Management</Header>
      <Tab panes={panes} />
    </Container>
  );
}

export default App;
