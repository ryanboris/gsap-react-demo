import React, { useRef } from 'react'
import TweenMax from 'gsap/TweenMax'
import styled from 'styled-components'

const Div = styled.div`
  border: 5px solid black;
  height: 500px;
  width: 500px;
`

const Box = () => {
  let el = useRef(null)
  return (
    <Div
      onClick={() => {
        TweenMax.to(el, 2, {
          opacity: 0,
          repeat: 2,
          height: 0,
          width: 0,
          borderRadius: '100%'
        })
      }}
      ref={div => (el = div)}
    />
  )
}

export default Box
