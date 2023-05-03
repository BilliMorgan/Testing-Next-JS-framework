import classes from './MenuIcon.module.css'
const MenuIcon = ({clicked}) => {
  return (
    <div className={classes.container} onClick={clicked}>
      <div className={classes.menu}></div>
      <div className={classes.menu}></div>
      <div className={classes.menu}></div>
    </div>
  )
}
export default MenuIcon