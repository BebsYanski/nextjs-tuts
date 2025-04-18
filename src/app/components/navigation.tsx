import Link from "next/link"
const Navigation = () => {
  return (
    <nav>
        <Link href={"/"} className="mr-4 text-blue-500">Home</Link>
        <Link href={"/about"} className="mr-4 text-blue-500">About</Link>
        <Link href={"/products/1"} className="mr-4 text-blue-500">Product 1</Link>
        <Link href={"/trainer"} className="mr-4 text-blue-500">Trainer</Link>
        <Link href={"/trainee"} className="mr-4 text-blue-500">Trainee</Link>


    </nav>
  )
}

export default Navigation