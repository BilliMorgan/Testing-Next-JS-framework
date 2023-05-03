import Link from "next/link"
import MenuIcon from "./MenuIcon"
import classes from './MainNavigation.module.css';
import { useState } from "react";

function MainNavigation() {
  const [isClicked, setIsClicked] = useState(false)

  const onClickHandled = () => {
    setIsClicked(!isClicked)
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav className={isClicked? classes.navbar : null}>
        <ul >
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <MenuIcon clicked={onClickHandled}/>
    </header>
  )
}

export default MainNavigation;
