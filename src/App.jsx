import SideTab from "./components/SideTab";
import MainTab from "./components/MainTab";
function App() {
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <main className="h-screen my-8 flex gap-8">
        <SideTab />
        <MainTab />

      </main>
    </>
  );
}

export default App;
