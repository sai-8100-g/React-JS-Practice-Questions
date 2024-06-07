import './index.css'

const BannerCardItems = props => {
  const {cardDetails} = props
  const {description, headerText, className} = cardDetails
  return (
    <li className={className}>
      <div className="para-info">
        <h1>{headerText}</h1>
        <p>{description}</p>
        <div>
          <button type="button">Show More</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItems
