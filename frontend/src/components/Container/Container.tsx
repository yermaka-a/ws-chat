
import './Container.scss'

function Container({children}: React.PropsWithChildren) {

  return (
    <div style={{
      maxWidth: '800px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      padding: '16px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      height: '80vh',
      overflowY: 'scroll',
      
    }}>
      {children}
    </div>)
}

export default Container
