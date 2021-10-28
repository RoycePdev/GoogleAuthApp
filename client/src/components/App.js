import { startSession } from 'mongoose'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


function App() {

  return ( 
  <div className='App'>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={ Landing } />
        aaaa
        <Route exact path="/surveys" component={ Dashboard } />
        gggg
        <Route path="/surveys/new" component={ SurveyNew } />
        ccc
      </div>
    </BrowserRouter>
  </div>
  )
}

export default App
