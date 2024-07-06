// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamData} = this.state
    return (
      <div className="app-container">
        <div className="team-container">
          <div className="ipl-dashboard-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-img"
            />
            <h1 className="ipl-dashboard-title">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div testid="loader" className="loader-container">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="team-list-container">
              {teamData.map(eachTeam => (
                <TeamCard key={eachTeam.id} eachTeamDetails={eachTeam} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
