import './Leadership.css'
import BoardOfTrustees from './BoardOfTrustees'
import ExCommittee from './ExCommittee'
import Team from './Team'
import Leaders from './Leaders'

const Leadership = () => {
  return (
    <div className='leadership'>
      <Leaders/>
      <BoardOfTrustees/>
      <ExCommittee/>
      <Team/>
    </div>
  )
}

export default Leadership
