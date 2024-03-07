import { SelectedFiltersProvider } from "@/../context/SelectedFiltersContext";
export default function RootLayout({ children }) {
  return (
    <>
      <SelectedFiltersProvider>{children}</SelectedFiltersProvider>
    </>
  );
}
