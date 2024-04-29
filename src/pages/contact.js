import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); 

export default function contact() {
    return (
        <main className={`${styles.main}  ${inter.className}`}>
        <div>
            This is contact page
        </div>
        </main>
    );
}