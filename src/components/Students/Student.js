import React, { useState } from 'react'
import { Button, Card, Container, Header, Icon, Image, Input, Item } from 'semantic-ui-react'
import StudentForm from './StudentForm';

const Student = () => {
    const initStudent = [
        {
            id: 1,
            name: 'Phil Foden',
            desc: 'a book or other written or printed work, regarded in terms of its content rather than its physical form.',
            position: 'forward',
            img: 'https://s1.fifaaddict.com/fo4/players/qvmwlbpo.png?20220630'
        },
        {
            id: 2,
            name: 'Erling Halaand',
            desc: 'a book or other written or printed work, regarded in terms of its content rather than its physical form.',
            position: 'forward',
            img: 'https://www.mancity.com/meta/media/233jlh2j/microsoftteams-image-127.png?width=600'
        },
        {
            id: 3,
            name: 'Kevin Bruyne',
            desc: 'a book or other written or printed work, regarded in terms of its content rather than its physical form.',
            position: 'midifielder',
            img: 'https://s1.fifaaddict.com/fo4/players/olbmkygb.png?20220630'
        },
        {
            id: 4,
            name: 'Jack Grealish',
            desc: 'a book or other written or printed work, regarded in terms of its content rather than its physical form.',
            position: 'midifielder',
            img: 'https://s1.fifaaddict.com/fo4/players/olvjqgkd.png?20220630'
        },
    ]
    const [students, setStudents] = useState(initStudent);
    const delStudent = (id) => {
        const res = students.filter(student => student.id !== id.id);
        setStudents(res);
    };
    const handleAddStudent = (data) => {
        setStudents(prev => [...prev, data]);
    }
    const GroupButton = (id) => {
        return (
            <>
                <Icon name='edit' bordered/>
                <Icon name='trash' bordered onClick={() => delStudent(id)}/>
            </>
        );
    }
  return (
    <>
    <Header>Add new student</Header>
    <Container>
    <StudentForm handleAddStudent={handleAddStudent} />
    </Container>
    <Item.Group divided>
        {students.map((student) => {
            return (
                <>
                    <Item>
                        <Item.Image size='small' src={student.img} />
                        <Item.Content header={student.name} description={student.desc} meta={student.position} content={<GroupButton id={student.id} />}/>
                    </Item>
                </>
            );
        })}
    </Item.Group>
    </>
  )
}

export default Student