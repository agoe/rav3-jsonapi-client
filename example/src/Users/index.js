import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  Edit,
  required
} from 'react-admin';
const validateRequired = required();
export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="email"  /> 
    </SimpleForm>
  </Create>
);
const UserEditTitle = ({ record }) => (<span>{`${record.Name} ${record.Email}`}</span>);
export const UserEdit = props => (
  <Edit undoable={false} {...props} title={<UserEditTitle />}>
    <SimpleForm redirect="list">
      <TextInput source="name" validate={validateRequired}>
      </TextInput>
      <TextInput source="email"  />
      {/* <BooleanInput source="isPresent" /> */}
    </SimpleForm>
  </Edit>
);  