import React from "react";  
import styles from "@/styles/Home.module.css";
// import { useRouter} from "next/router";
import blogStyle from "./queryblog.module.css";
import { useEffect, useState, useRef } from "react";

export default function Slug(props) {
   const isMounted = useRef(false);
   const [blog,setblog] = useState(props.myBlog);
//    const router = useRouter();
//    useEffect(() => {
//     if (!isMounted.current) {
//     if (!router.isReady) return;

//     const { slug } = router.query;
//     console.log("useEffect is running");

//     fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             setblog(data);
//         })
//         .catch(error => {
//             console.error('Error fetching blog data:', error);
//         });
//         isMounted.current = true
//     }
// }, [router.isReady, router.query.slug]);
   
    return (
        <main className={styles.main}>
        <div className={blogStyle.blogContainer}>
           <h1 className={blogStyle.tCenter}>{blog &&   blog.title}</h1>
           <p>{blog && blog.content}</p>
        </div>
        </main>
    );
}
export async function getServerSideProps(context) {
    // this is next js's inbuild function 
    // this function returns props 
    // console.log(context.query)
    // const router = useRouter();
    const { slug } = context.query;

    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog = await data.json()
    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}