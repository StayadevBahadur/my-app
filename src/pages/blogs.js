import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import blogStyle from "@/styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


// collect all the blogdata from the blog data directroy
//ś
export default function blogs(props) {
    // const isMounted = useRef(false);

    const [blog, setblogs] = useState(props.data);

    // useEffect(() => {
    //     if (!isMounted.current) {
    //         // This code will run only once after initial mount
    //         console.log("useEffect is running");
    //         fetch('http://localhost:3000/api/blogs')
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setblogs(data)
    //             });

    //         isMounted.current = true;
    //     }
    // }, []);

    return (
        <main className={`${styles.main} ${inter.className}`}>
            <div className={blogStyle.blogsContainer}>
                {blog.map((blogitem) => {
                    return <div className={blogStyle.blogItem} key={blogitem.title}>
                        <Link href={`blogpost/${blogitem.slug}`}>
                            <h3 className={blogStyle.Hmargin}>{blogitem.title}</h3></Link>
                        <p>{blogitem.content.substr(0, 400)} .....</p>
                    </div>
                })}

            </div>
        </main>
    );
 
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/blogs`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }