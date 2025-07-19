import { NavLinks } from "./images/data"
import { Link, NavLink } from "react-router-dom"
import MenuBtn from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import Cart from '@mui/icons-material/ShoppingCart';
import Login from '@mui/icons-material/Login';
import { useRef, useState } from "react";
import { useOutsideClick } from "./useOutSideClick";
import { getProductCart } from "./addToCart";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


export const Header = () => {
    const { cartItems } = getProductCart();
    /* function Open & close Search Input */
    const [openSearch, setOpenSearch] = useState(false);
    const searchRef = useRef();

    /* useOutsideClick(searchRef, () => setOpenSearch(false));
    const openSearchFnc = (e) => setOpenSearch(e); */

    /* function Open & close Menu */
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef();

    useOutsideClick(menuRef, () => setOpenMenu(false));
    const openMenuFuc = (e) => setOpenMenu(e);

    return (
        <>
            <div className="container flex items-center">
                <div className="logo">
                    <h1 className="font-bold text-2xl uppercase"><span className="text-sky-500">G</span>-Store</h1>
                </div>
                {/* Links in large Screen */}
                <nav className="hidden md:flex gap-1 ml-5">
                    {
                        NavLinks.map((link, index) => {
                            return (
                                <NavLink key={index} to={link.path} activeclasename="active" className='p-2 relative inline-block font-medium text-gray-700'>{link.text}</NavLink>
                            )
                        })
                    }
                </nav>
                {/* Links in small Screen */}
                {<nav className={`absolute w-full left-0 bg-white border-b-3 border-[#ccc] top-[calc(100%+25px)] p-2 shadow-lg rounded-lg md:hidden overflow-hidden transition-all duration-300 ${openMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {
                        NavLinks.map((link, index) => {
                            return (
                                <Link className='block link p-2' key={index} to={link.path}>{link.text}</Link>
                            )
                        })
                    }
                </nav>}
                {/* icons Controlling */}

                <div className="flex gap-1.5 flex-1 items-center justify-end">
                    <div className={`p-1 cursor-pointer md:hidden  ${openMenu ? 'hidden' : 'block'}`} ref={menuRef} onClick={() => openMenuFuc(!openMenu)}><MenuBtn /></div>
                    <div className={`p-1 cursor-pointer ${openMenu ? 'block' : 'hidden'}`}><Close /></div>
                    <Link to="/checkout" className={`p-1 cursor-pointer relative`}><Cart /> <span className="bg-red-600 absolute -top-2 hero-image-x text-xs px-1 text-white rounded-full">{cartItems.length}</span></Link>
                    <div className="p-1 cursor-pointer">
                        <SignedOut>
                            <SignInButton className='bg-sky-500 text-white px-2 py-1 rounded-lg cursor-pointer' />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </>
    )
}