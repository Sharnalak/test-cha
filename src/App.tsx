import Menu from "./components/Menu";
import { useMenuDatas } from "./hooks/useMenuDatas";

function App() {
  const data = useMenuDatas();

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <ul className={`relative w-MENU_WIDTH`}>
            {data.map((item) => {
              return <Menu depth={1} data={item} key={item.id} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
