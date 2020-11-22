import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
)

const large = (style) => {
  return css`
    @media (min-width: ${1200}px) {
      ${style}
    }
  `
}

const mixin = css`
  background-color: rgba(255, 0, 0, 0.2);
`

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
  ${mixin}
  a {
    color: red;
    &:hover {
      background-color: black;
    }
  }
  &.active {
    background-color: rgba(255, 0, 0, 1);
    a {
      color: blue;
    }
  }
  ${large(css`
    padding: 10px;
  `)}
`
