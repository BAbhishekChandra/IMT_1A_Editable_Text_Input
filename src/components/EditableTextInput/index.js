import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {inputTextValue: '', saveText: true, editText: false}

  onChangeTextValue = event => {
    this.setState({inputTextValue: event.target.value})
  }

  saveTextMethod = () => {
    this.setState({saveText: false, editText: true})
  }

  editTextMethod = () => {
    this.setState({saveText: true, editText: false})
  }

  render() {
    const {inputTextValue, saveText, editText} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading-element">Editable Text Input</h1>
          {saveText ? (
            <div className="input-container">
              <input
                className="input-element"
                type="text"
                value={inputTextValue}
                onChange={this.onChangeTextValue}
              />
              <button
                type="button"
                className="custom-button"
                onClick={this.saveTextMethod}
              >
                Save
              </button>
            </div>
          ) : (
            ''
          )}
          {editText ? (
            <div className="paragraph-container">
              <p className="text-value-paragraph">{inputTextValue}</p>
              <button
                type="button"
                className="custom-button"
                onClick={this.editTextMethod}
              >
                Edit
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
