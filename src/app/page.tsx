import { Button, CardList } from "@/ui";
import { Modal } from "@/ui/components/Modal/Modal";

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
      <CardList />

    </main>
  );
}
