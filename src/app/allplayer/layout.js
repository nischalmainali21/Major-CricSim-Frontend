import { TeamDataContextProvider } from "../../../context/TeamContext";
export default function RootLayout({ children }) {
  return (
    <>
      <TeamDataContextProvider>{children}</TeamDataContextProvider>
    </>
  );
}
