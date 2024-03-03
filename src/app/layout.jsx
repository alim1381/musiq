import { Nunito } from "next/font/google";
import { ApolloWrapper } from "@/lib/graphql/apollo-wrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/mui/theme";
import "./globals.css";
import ReduxProvider from "@/lib/provider/ReduxProvider";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Muisq",
  description: "a platform for music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ApolloWrapper>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </AppRouterCacheProvider>
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
