import GameBoard from "./components/GameBoard";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-center">
      <div className="flex flex-col justify-center">
        <GameBoard />
      </div>
    </div>
  );
};

export default App;
