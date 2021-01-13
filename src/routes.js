import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Members from './components/Members'
import PlayerHistory from './components/PlayerHistory'
import PostScore from './components/PostScore'
import WeeklyGames from './components/WeeklyGames'
import NotFound from './components/NotFound'

export default(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/members' component={Members} />
      <Route exact path='/members/:id' component={PlayerHistory} />
      <Route exact path='/postscore' component={PostScore} />
      <Route exact path='/weeklygames' component={WeeklyGames} />
      <Route component={NotFound}/>
    </Switch>
)