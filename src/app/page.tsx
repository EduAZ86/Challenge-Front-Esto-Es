import { CardList } from "@/ui";
import { Pagination } from "@/ui/components/Pagination/Pagination";


export default function Home() {
  return (
    <main className={`
    flex 
    min-h-screen 
    flex-col   
    w-full
    justify-start items-center
    bg-light-background dark:bg-dark-background
    `}>
      <Pagination />
      <CardList />

    </main>
  );
}
