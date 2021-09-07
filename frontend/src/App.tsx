import DataTable from "./components/DataTable";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="text-primary py-3">Dashboard de Vendas</h2>
        <DataTable/>
      </div>      
      <Footer/>
    </>
  );
}

export default App;
