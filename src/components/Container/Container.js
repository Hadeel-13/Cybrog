import './Container.css'
const Container = (props) => {
  return (
    <>
      <div className='container bg-cdark text-light p-5 rounded-5'>{props.children}</div>
    </>
  )
}
export default Container