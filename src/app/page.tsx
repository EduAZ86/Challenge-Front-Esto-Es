import { CardList, Header } from "@/ui";

export default function Home() {
  return (
    <main className={`
    flex 
    min-h-screen 
    flex-col
    w-full md:w-3/4
    justify-center items-start
    `}>
      <CardList />
    </main>
  );
}
