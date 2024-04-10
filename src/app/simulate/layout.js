import { SimulateMatchDataProvider } from "../../../context/SimulateMatchDataContext";
export default function RootLayout({ children }) {
  return (
    <>
      <SimulateMatchDataProvider>{children}</SimulateMatchDataProvider>
    </>
  );
}
