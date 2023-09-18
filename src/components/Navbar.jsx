import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants/index'
const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a className='text-gray-700 font-extrabold text-center ' href="/">
                <img 
                className='flex items-center justify-center'
                src={headerLogo} 
                alt="Logo" 
                width={50} 
                height={10}
                />SollydZ
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((item) =>(
                        <li key={item.label}>
                            <a 
                            href={item.href} 
                            className='font-monts errat leading-normal text-lg text-slate-800'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='Hamburger' width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar