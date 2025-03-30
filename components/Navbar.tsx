import { NAV_LINKS } from "@/contants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container retlative z-30 py-5">
        <Link href={"/"}>
            <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29}/>

        </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => {
                    return(
                        <Link href={link.href} key={link.key}
                        className="regulat-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </ul>

            <Image 
                src={"/menu.svg"} 
                alt="menu" 
                width={32} 
                height={32} 
                className="lg:hidden inline-block cursor-pointer"
            />
    </nav>
  )
}

export default Navbar
