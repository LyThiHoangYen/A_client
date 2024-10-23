import Sidebar from "./components/sideBar";
import Header from "./components/header";
function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
