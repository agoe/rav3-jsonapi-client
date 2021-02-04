import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
//import { Admin, Resource, ShowGuesser, ListGuesser, EditGuesser } from 'react-admin';
//import restProvider from 'ra-data-simple-rest';
import jsonapiClient from "rav3-jsonapi-client";
// posts
//import PostList from './components/PostList.js';
//import PostCreate from './components/PostCreate.js';
//import PostEdit from './components/PostEdit.js';
// users
//import UserList from './components/UserList.js';
//import UserCreate from './components/UserCreate.js';
//import UserEdit from './components/UserEdit.js';


function App() {
  const settings = { total: 'count' };
  const jsonDataProvider = jsonapiClient('http://localhost:5000/api', settings);
    return (
      <Admin dataProvider={jsonDataProvider}>
          {/* <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit}></Resource>
          <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}></Resource>*/}
          <Resource name="Users" list={ListGuesser} ></Resource>
      </Admin>
    );
}

export default App;