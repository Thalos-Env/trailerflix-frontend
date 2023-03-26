import React from 'react'
import './input.css'

interface InputProps {
  /**
   * What is the message?
   */
  state: string
  /**
   * What is the on Change?
   */
  setState: React.Dispatch<React.SetStateAction<string>>
  /**
   * Is there an error?
   */
  error?: boolean
  /**
   * Is the input required?
   */
  required?: boolean
  // fullWidth?: boolean;
}

/**
 * state UI component for user interaction
 */
export const Input = ({ state, setState, error, ...props }: InputProps) => {
  const borderError = error && 'storybook-input--error'
  return (
    <input
      // width={}
      className={[borderError].join(' ')}
      style={{ color: 'white' }}
      {...props}
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  )
}
