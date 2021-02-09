import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserEdit, UserCreate } from './Users';
//import { Admin, Resource, ShowGuesser, ListGuesser, EditGuesser } from 'react-admin';
//import restProvider from 'ra-data-simple-rest';
import jsonapiClient from "rav3-jsonapi-client";
import { BookCreate, BookEdit, BookList } from './Books';


function App() {
  const settings = { total: 'count' };
  const jsonDataProvider = jsonapiClient('http://localhost:5000/api', settings,);
    return (
      <Admin dataProvider={jsonDataProvider}>
          {/* <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit}></Resource>
          <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}></Resource>*/}
          <Resource name="Users" list={ListGuesser} edit={UserEdit}  create={UserCreate} ></Resource>
          <Resource name="Books" list={BookList } edit={BookEdit} create={BookCreate} />
      </Admin>
    );
}

export default App;