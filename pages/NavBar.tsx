import * as React from 'react'
import Link from 'next/link'
import nav from "./NavBar.module.css"


const NavBar = () => (
    <div className={nav.NavBar}>


    <span className={nav.logo}>
<img src={"https://i.ibb.co/yfp2PHT/logo.png"} className={nav.logo}/>
    </span>

        <div className={nav.navLinks}>
           <span className={nav.welcome}>Welcome to your blog!

           </span>

            <nav className={nav.menu}>
                <Link href='/'><a>My blog</a></Link> {'  '}

                <Link href='/posts/new'><a>Create Post</a></Link> {'  '}
            </nav>
        </div>

    </div>
)

export default NavBar