import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] }); 


export default function Navbar() {
    return (
        <main>
         <style jsx>
           {`{
            .container{
                display: flex;
                justify-content: center;
            }
           }`}
            </style>   

        <div className="container">
        <nav className={`${styles.mainNav}  ${inter.className}`}>
          <ul>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/about"}><li>About</li></Link>
            <Link href={"/blogs"}><li>Bolgs</li></Link>
            <Link href={"/contact"}><li>Contact</li></Link>
          </ul>

        </nav>
        </div>
        </main>
    );
}