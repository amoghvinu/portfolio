import React, { useRef, useState, useEffect, useCallback } from 'react'
import { render } from 'react-dom'
import { useTransition, animated } from 'react-spring'


function App() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      {  color: '#28d79f' },
      
    ],
    leave: [{ color: 'blue' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#c23369' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['HI!', 'I am Amogh', 'Welcome to my','Profile...']), 2000))
    ref.current.push(setTimeout(() => set(['HI!', 'I am Amogh','Welcome to my','Profile...']), 2000))
    
    
    
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    
    </div>
  )
}

export default App;
