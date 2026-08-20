import SaveButton from "./components/SaveButton";


export default function Home() {
  return (
    <main>
      <h1 className="h-15 flex items-center text-xl pl-1 font-bold border-dashed border-b-2 mb-3">DevBoard</h1>
      <p>Find your next developer job.</p>
      <SaveButton/>
    </main>
  );
}
