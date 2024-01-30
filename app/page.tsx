
import Link from "next/link";
import prisma from "@/lib/prisma"
import Post from "./components/Post";
import { Key } from "react";

// async function getPost() {
//   const posts = await prisma.post.findMany({
//     where: {
//       published: true,
//     },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });

//   return posts;
// }

// type Post = {
//   id: string,
//   author: { name: string },
//   title: string,
//   content: string
// }

async function getPosts() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/getPosts`, { cache: 'no-store' }); // Update this with the correct API endpoint
    const data = await response.json();

    console.log(data)
    console.log(data.posts)

    return data.posts || []; // Return an empty array if data.posts is undefined
  }
  catch (error) {
    console.error(error)
  }

  return []; // Return an empty array if data.posts is undefined

}


export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className="py-7 px-48">
      {
        //back ground color teal 500
        //text color black
        //font size medium bold
        //py padding top and bottom 2px
        //px padding left and right 4px
        //rounded-md border radius 4px makes the button rounded
      }
      <Link className="bg-teal-500 text-black font-medium py-2 px-4 rounded-md" href={"/dashboard"}>Go to addPost </Link >

      {posts.map((post: { id: Key | null | undefined; author: { name: any; }; title: string; content: any; }) => (
        <Post
          key={post.id}
          id={Number(post.id)}
          authorName={post.author?.name ?? ""}
          title={post.title}
          content={post.content ?? ""}
        />
      ))}

    </main>
  );
}
