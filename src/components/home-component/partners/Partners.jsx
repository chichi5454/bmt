import PartnerWrapper from './PartnerWrapper'
import './Partners.css'

const Partners = () => {
  return (
    <div className='partners-container'>
      <h1>Partners</h1>
      <div className="partner-wrapper">
        <PartnerWrapper/>
        <PartnerWrapper/>
        <PartnerWrapper/>
        <PartnerWrapper/>
        <PartnerWrapper/>
        <PartnerWrapper/>
        <PartnerWrapper/>
      </div>
    </div>
  )
}

export default Partners
