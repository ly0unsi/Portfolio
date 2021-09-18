import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link  href={route} scroll={false}>
         <a>
            <span
               className='mx-2 cursor-pointer hover:border-b-4 hover:text-red-500'
               onClick={() =>{  setActive(name) }}>
                  {name}
            </span>
               </a>
      </Link>
   ) : <span className='mx-2 font-bold text-red-500'>
         {name}
      </span>
}
const Navbar = () => {
   const { pathname } = useRouter()

   const [active, setActive] = useState('')

   //later
   useEffect(() => {
      if (pathname === '/') setActive('A Propos')
      else if (pathname === '/projects') setActive('Projets')
      else if (pathname === '/resume') setActive('Resume')
   }, [])

   return (
      <div className='flex items-center justify-between px-5 py-3 my-3'>
         
       
         <div className='text-base flex font-normal md:text-xl'>
        
            <NavItem
               active={active}
               setActive={setActive}
               name='A Propos'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               route='/resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projets'
               route='/projets'
            />
         </div>
      </div>
   )
}

export default Navbar
