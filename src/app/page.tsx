import { CardList, Pagination, SearchBar } from "@/ui";



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
      <SearchBar />
      <Pagination />
      <CardList />
    </main>
  );
}
