import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#3eac51",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  th: {
    fontSize: 16
  }
});

let id = 0;
function createData(phone, address, balance) {
  id += 1;
  return { id, phone, address, balance };
}

const rows = [
  createData('79110039111', '0xA9DD4C529e409D8c6235d9926af45197430Ce4E5', 1),
  createData('79859550222', '0xB512a84B2BE31d12C7E6c6ca3CBb86E083f0017b', 22),
  createData('76857656333', '0xb5181242CD2790beDc06e1d75DCe7C8420c24887', 30),
  createData('78975634444', '0xFbaa2E068141903aC774D91a14DBBee7Bd5d8db5', 4),
  createData('76853333555', '0x780A59C220Be88700067E1EE00d68D91D4253003', 21),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {/* <CustomTableCell>ID</CustomTableCell> */}
            <CustomTableCell>Номер телефона</CustomTableCell>
            <CustomTableCell>Адрес кошелька</CustomTableCell>
            <CustomTableCell numeric>Текущий баланс</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                {/* <CustomTableCell component="th" scope="row">{row.name}</CustomTableCell> */}
                <CustomTableCell>{row.phone}</CustomTableCell>
                <CustomTableCell>{row.address}</CustomTableCell>
                <CustomTableCell numeric>{row.balance}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);