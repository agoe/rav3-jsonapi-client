import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Edit,
  required,
} from 'react-admin';

const validateRequired = required();


export const BookList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <ReferenceField source="user_id" reference="Users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="id" />
          <TextField source="name" />
      </Datagrid>
  </List>
);


export const BookCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput source="name" validate={validateRequired} />
    </SimpleForm>
  </Create>
);
const BookEditTitle = ({ record }) => (<span>{`${record.name} `}</span>);
export const BookEdit = props => (
  <Edit {...props} title={<BookEditTitle />}>
    <SimpleForm >
        <TextInput disabled source="id" />
        <ReferenceInput source="user_id" reference="Users">
               <SelectInput optionText="name" />
        </ReferenceInput>
      <TextInput source="name" validate={validateRequired} />
    </SimpleForm>
  </Edit>
);