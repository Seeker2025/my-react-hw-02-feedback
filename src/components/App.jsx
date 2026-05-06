import { CafeStatistics } from "./CafeStatistics/CafeStatistics";

export const App = () => {
  return (
    <>
    <h1>Cafe Expresso</h1>

    <CafeStatistics/>

    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
    </>
  );
};

