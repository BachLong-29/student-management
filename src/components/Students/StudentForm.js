import React, { useState } from 'react'
import { Button, Form, Input, Select, TextArea } from 'semantic-ui-react'

const StudentForm = (props) => {
    const { handleAddStudent } = props;

    const genderOptions = [
        { key: 'm', text: 'Forward', value: 'forward' },
        { key: 'f', text: 'Midfielder', value: 'midfielder' },
        { key: 'd', text: 'Defender', value: 'defender' },
        { key: 'g', text: 'Goalkeeper', value: 'goalkeeper' },
      ]
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [desc, setDesc] = useState('');

  return (
    <>
        <Form>
            <Form.Group widths='equal'>
            <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label='Full name'
                placeholder='Full name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Form.Field
                control={Select}
                options={genderOptions}
                label={{ children: 'Position', htmlFor: 'form-select-control-gender' }}
                placeholder='Position'
                search
                searchInput={{ id: 'form-select-control-gender' }}
                value={position}
                onChange={(e) => setPosition(e.target.value)}

            />
            </Form.Group>
            <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Description'
                placeholder='Description'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />

            <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                onClick={() => handleAddStudent({
                    id: '',
                    name,
                    desc,
                    position,
                    img: 'https://s1.fifaaddict.com/fo4/players/mkvwvvpo.png?20220630'
                })}
            />
        </Form>
    </>
  )
}

export default StudentForm