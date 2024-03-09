import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="list-item">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <p>{title}</p>
        <p id="domain-url">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
