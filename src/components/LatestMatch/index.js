import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-title">Latest Matches</h1>
      <div className="latest-match-card-container">
        <div className="latest-match-logo-container">
          <div className="match-container-1">
            <p className="latest-team-name">{competingTeam}</p>
            <p className="latest-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <hr className="separator" />
        <div className="match-container-2">
          <p className="latest-match-label">First Innings</p>
          <p className="latest-match-value">{firstInnings}</p>
          <p className="latest-match-label">Second Innings</p>
          <p className="latest-match-value">{secondInnings}</p>
          <p className="latest-match-label">Man Of The Match</p>
          <p className="latest-match-value">{manOfTheMatch}</p>
          <p className="latest-match-label">Umpires</p>
          <p className="latest-match-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
