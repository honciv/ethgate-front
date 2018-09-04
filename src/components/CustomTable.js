import React from "react";
import MUIDataTable from "mui-datatables";
import Grid from "@material-ui/core/Grid";

const columns = ["Номер телефона", "Адрес кошелька", "Текущий баланс"];

const data = [
  ["79110039111", "0xA9DD4C529e409D8c6235d9926af45197430Ce4E5", 1],
  ["79859550222", "0xB512a84B2BE31d12C7E6c6ca3CBb86E083f0017b", 22],
  ["76857656333", "0xb5181242CD2790beDc06e1d75DCe7C8420c24887", 30],
  ["78975634444", "0xFbaa2E068141903aC774D91a14DBBee7Bd5d8db5", 4],
  ["76853333555", "0x780A59C220Be88700067E1EE00d68D91D4253003", 212],
  ["79636366336", "0x39aeD435E97F0851811bd0f39870Fbc2e005fE49", 111],
  ["79836377777", "0x385acA76c2085f5F7364BF40Fa9d1cf108c180D8", 2332],
  ["76857688888", "0x174CD344Eef125C2dbAdec0A0736E9C39C40a765", 3550],
  ["78975638989", "0xfe4Ad76814046Ba814749B1E9f53D6BcD6A3A5a9", 466],
  ["76853300000", "0x7FF826F3a620c3649A3c38E9AFC8262D0aAD7C7F", 271],
  ["79110343211", "0xAa6A1Cc9e89907a441ef4C72f464c092bc1D11c8", 2],
  ["79859544422", "0x611ba0Ddd7C2C06df23EfA051cA30c32cF61F9FF", 223],
  ["76857655533", "0x93731529ae33579FCC8AFe38D0E82167e9bB2e5c", 241],
  ["78975664444", "0x1cec71A44004E770D71Cbeb80BbFF0Fb3A56C8b2", 42]
];

const options = {
  filterType: "checkbox"
};

function CustomTable() {

  return (

    <Grid container spacing={24} style={{ justifyContent: "center" }}>
      <Grid item xs={11} s={10} md={11} style={{ overflowX: "auto" }}>
        <div className="custom-table">
          <MUIDataTable
            title={"Онлайн-таблица с поиском и фильтрацией"}
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default CustomTable; 
