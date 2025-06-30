import { useEffect, useState } from 'react'

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label='Scroll to top'
      style={{
        zIndex: 6000000,
        position: 'fixed',
        right: '2rem',
        bottom: '2rem',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #64748b 60%, #94a3b8 100%)',
        boxShadow: '0 4px 24px 0 rgba(71, 85, 105, 0.25)',
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.3s',
        opacity: visible ? 1 : 0,
      }}
    >
      <svg width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='#fff' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='12' cy='12' r='11' stroke='none' fill='rgba(100,116,139,0.15)' />
        <path d='M12 17V7' />
        <path d='M7 12l5-5 5 5' />
      </svg>
    </button>
  )
} 