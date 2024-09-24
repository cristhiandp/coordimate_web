import { Box } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Box
    component="section"
    sx={{
      padding: "4rem 7rem 4rem 7rem",
      width: "100%",
      height: "100%",
    }}
  >
    {children}
  </Box>
);

export { Layout };
