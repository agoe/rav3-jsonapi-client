import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
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


export const AddressList = props => (
  <List {...props}
  include='users'>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="city" />
          <TextField source="email_address" />
          <TextField source="name" />
          <TextField source="suite" />
          <TextField source="zipcode" />
          <TextField source="users" />
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