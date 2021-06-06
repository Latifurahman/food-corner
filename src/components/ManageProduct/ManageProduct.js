import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ManageProduct.css';

const ManageProduct = () => {
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159),
        createData('Ice cream sandwich', 237),
        createData('Eclair', 262),
        createData('Cupcake', 305),
        createData('Gingerbread', 356),
    ];

    const classes = useStyles();
    return (
        <TableContainer component={Paper} className="container">
            <h1 className="manage-product-title">Manage Product</h1>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-title">Product Name</TableCell>
                            <TableCell className="table-title" align="right">Price</TableCell>
                            <TableCell className="table-title" align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
    );
};

export default ManageProduct;