import './index.css'

const listColors = [
  'color-1',
  'color-2',
  'color-3',
  'color-4',
  'color-5',
  'color-6',
  'color-7',
  'color-8',
  'color-9',
  'color-10',
]
const fColor = listColors[Math.ceil(Math.random() * 10)]

const GeneratedPassword = props => {
  const {memberPassword, isShowPasswords, updateFilteredPasswordsList} = props
  const {userName, userPassword, userWebsite, id} = memberPassword
  const firstChar = userWebsite[0].toUpperCase()

  const showPassword = isShowPasswords ? (
    userPassword
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="img-password"
    />
  )

  const deletePasswordFromList = () => {
    updateFilteredPasswordsList(id)
  }
  return (
    <li className="list-item">
      <div className={`${fColor} first-name`}>
        <p>{firstChar}</p>
      </div>
      <div className="names">
        <p>{userWebsite}</p>
        <p>{userName}</p>
        <p>{showPassword}</p>
      </div>
      <button
        type="button"
        className="div-delete"
        onClick={deletePasswordFromList}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default GeneratedPassword
