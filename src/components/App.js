import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { LeftBar } from './LeftBar/LeftBar'
import { Body, BodyEmpty } from './Body/Body'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersAction } from '../store/users/actions';

const Container = styled.div`
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background: #23313f;
  height: 99vh;
  max-height: 99vh;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 1px 0 10px 0 #000;
  margin-bottom: 10px;
  overflow: hidden;
  @media (max-width: 1025px) {
    height: 100vh;
    max-height: 100vh;
    margin-bottom: 0;
    border-radius: 0;
  }
`

const App = () => {
  const dispatch = useDispatch()
  const users = useSelector(store => store.users)
  useEffect(() => dispatch(loadUsersAction()), [])

  return (
    <Container>
      <Router basename={'/test-incora'}>
          <LeftBar/>
          <Route exact path="/" render={() => <BodyEmpty />}/>
            {users.map((user, i) => {
              return (
                  <Route 
                      key={i}
                      path={`/user${user.id}`} 
                      render={() => <Body user={user}/>} 
                  />
              )
            })}
      </Router>
    </Container>
  )
}

export default App;
