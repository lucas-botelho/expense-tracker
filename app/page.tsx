
import Link from "next/link";

async function getExpenses() {
  const response = await fetch(`${process.env.BASE_URL}/api/getExpenses`);

  if (!response.ok) {
    console.log("error");
  }

  return response.json();
}

export default async function Home() {

  // const data = await getExpenses();
  // console.log(data);
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
    </main>
  );
}
