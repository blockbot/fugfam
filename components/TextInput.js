import React from 'react';
import styled from '@emotion/styled'

/**
 * Basic text input tag
 *
 * @param {object} props
 */
const Input = styled.input`
  background: white;
  border: 1px solid black;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 0.3125rem;
  outline: none;
  padding: 0.92rem 0 0.625rem 0.625rem;
  resize: none;
  width: calc(100% - (0.625rem * 2));
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &::placeholder {
    color: gray;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0.375rem 0.375rem -0.375rem black;
  }

  &:focus {
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value || ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleKeyUp(event) {
    if(this.props.handleKeyUp){
      this.props.handleKeyUp(event);
    }
  }

  render(){
    return(
      <Input onChange={this.handleChange}
             onKeyUp={this.handleKeyUp}
             value={this.state.value}
             placeholder={this.props.placeholder}
             name={this.props.name}
             tabIndex={this.props.tabIndex}
             type={this.props.type}
      />
    )
  }
}

export default TextInput;
