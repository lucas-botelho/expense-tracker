
import Link from "next/link";
import prisma from "@/lib/prisma"
import Post from "./components/Post";

async function getPost() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}

export default async function Home() {
  const posts = await getPost();
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
      <Link className="bg-teal-500 text-black font-medium py-2 px-4 rounded-md" href={"/dashboard"}>Go to dashboard </Link >

      {posts.map((post) => (
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
