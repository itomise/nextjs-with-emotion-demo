import { Animated, Basic, basicStyles, bounce, Combined } from '../shared/styles'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import cn from 'classnames'

const Home = () => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    console.log(basicStyles)
    gsap.set('.css-'+basicStyles.name, {
      padding: '20px'
    })
  }, [])

  return (
    <div>
      <div css={basicStyles} className={cn({'active': isActive})} onClick={() => setIsActive(!isActive)}>
        <a>Cool Styles</a>
      </div>
    </div>
  )
}

export default Home
