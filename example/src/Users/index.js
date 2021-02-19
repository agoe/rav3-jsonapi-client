import React from 'react';
import {MyUrlField} from '../Components/myUrlField'
import {
  Create,
  List,
  Datagrid,
  EmailField,
  SimpleForm,
  TextField,
  TextInput,
  Edit,
  required
} from 'react-admin';
export const UserList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          {/* <ReferenceField source="address_id" reference="addresses"><TextField source="id" /></ReferenceField> */}
          <EmailField source="email" />
          <TextField source="name" />
          <TextField source="address.street" />
          <TextField source="company.name" />
          <MyUrlField source="company.website" />
      </Datagrid>
  </List>
);
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