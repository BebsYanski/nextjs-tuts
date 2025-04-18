'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
const Navigation = () => {
  const pathname = usePathname()
  return (
    <nav>
        <Link href={"/"} className={pathname === '/' ? "font-bold mr-4" :"mr-4 text-blue-500"}>Home</Link>
        <Link href={"/about"} className={pathname === '/about' ? "font-bold mr-4" :"mr-4 text-blue-500"}>About</Link>
        <Link href={"/products/1"} className={pathname.startsWith('/products/1') ? "font-bold mr-4" :"mr-4 text-blue-500"}>Product 1</Link>
        <Link href={"/trainer"} className={pathname === '/trainer' ? "font-bold mr-4" :"mr-4 text-blue-500"}>Trainer</Link>
        <Link href={"/trainee"} className={pathname === '/trainee' ? "font-bold mr-4" :"mr-4 text-blue-500"}>Trainee</Link>


    </nav>
  )
}

export default Navigation