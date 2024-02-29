import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import axios from "axios";
import { CryptoState } from "../Cryptocontex";
import {
  Container,
  CssBaseline,
  LinearProgress,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@material-ui/core";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };
  console.log(coins);
  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ margin: 18 }}>
          Cryptocurrency Price by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency..."
          variant="outlined"
          style={{ margin: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Container>
      <TableContainer>
      {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              <TableHead style={{backgroundColor:"#EEBC1D"}}>
                <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>

              </TableHead>
            </Table>
        )}
      </TableContainer>
    </ThemeProvider>
  );
};

export default CoinsTable;
