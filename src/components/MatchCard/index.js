// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {competingTeamLogo, matchStatus, competingTeam, result} =
    recentMatchDetails

  const getMatchStatus = matchStatus =>
    matchStatus === 'Won' ? 'match-won' : 'match-loss'
  const getMatchStatusClassName = `match-status ${getMatchStatus(matchStatus)}`

  return (
    <li className="list-item-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={getMatchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
