import {Component} from 'react'
import {v4} from 'uuid'
import GeneratedPassword from '../GeneratedPassword'
import './index.css'

class PasswordManager extends Component {
  state = {
    userWebsite: '',
    userName: '',
    userPassword: '',
    passwordsList: [],
    isChecked: false,
    searchValue: '',
  }

  onDeleteList = id => {
    const {passwordsList} = this.state
    const filteredPasswords = passwordsList.filter(
      eachPassword => id !== eachPassword.id,
    )
    this.setState({passwordsList: filteredPasswords})
  }

  submitValues = event => {
    event.preventDefault()
    const {userWebsite, userName, userPassword} = this.state

    const newPassword = {
      id: v4(),
      userWebsite,
      userName,
      userPassword,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      userName: '',
      userPassword: '',
      userWebsite: '',
    }))
  }

  changeUserWebsiteValues = event => {
    this.setState({userWebsite: event.target.value})
  }

  changeUserPasswordValues = event => {
    this.setState({userPassword: event.target.value})
  }

  changeUserNameValues = event => {
    this.setState({userName: event.target.value})
  }

  changeCheckboxStatus = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  updateSearchValues = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {
      passwordsList,
      userName,
      userWebsite,
      userPassword,
      isChecked,
      searchValue,
    } = this.state
    const newPasswordsList = passwordsList.filter(eachPassword =>
      eachPassword.userWebsite.includes(searchValue),
    )
    const passwordCount = passwordsList.length
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="cards">
          <div className="card-1">
            <form type="submit" className="myForm" onSubmit={this.submitValues}>
              <h2>Add New Password</h2>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
                <input
                  type="text"
                  value={userWebsite}
                  placeholder="Enter Website"
                  onChange={this.changeUserWebsiteValues}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="website"
                  className="input-logo"
                />
                <input
                  type="text"
                  value={userName}
                  placeholder="Enter Username"
                  onChange={this.changeUserNameValues}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="website"
                  className="input-logo"
                />
                <input
                  type="password"
                  value={userPassword}
                  placeholder="Enter Password"
                  onChange={this.changeUserPasswordValues}
                />
              </div>
              <button type="submit" className="btn-sub">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="img-password-manager"
            />
          </div>
          <div className="card-2">
            <div className="header-section">
              <h2>
                Your Passwords <span>{passwordCount}</span>
              </h2>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  type="text"
                  placeholder="Search"
                  onChange={this.updateSearchValues}
                />
              </div>
            </div>
            <hr className="separator" />
            <div className="card-3">
              <div className="check-box">
                <input
                  type="checkbox"
                  id="isChecked"
                  onChange={this.changeCheckboxStatus}
                />
                <label htmlFor="isChecked">Show Passwords</label>
              </div>
              {passwordCount < 1 ? (
                <div className="container-password">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                  />
                  <h1>No Passwords</h1>
                </div>
              ) : (
                <ul className="user-list">
                  {newPasswordsList.map(eachPassword => (
                    <GeneratedPassword
                      memberPassword={eachPassword}
                      key={eachPassword.id}
                      isShowPasswords={isChecked}
                      updateFilteredPasswordsList={this.onDeleteList}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
