'use client'
import { useState } from 'react';
import  TableRow  from './TableRow';

type CellData = string;
type RowData = CellData[];
type  TableData = RowData[];

export default function Table() {
    const [tableData, setTableData] = useState<TableData>([
        ['',''] // Initialize a table with one row, two columns
    ]);

    function addRow(): void {
        const rowLength = tableData[0].length;
        const newRow = Array(rowLength).fill('');

        setTableData([...tableData, newRow]);
    }

    function addColumn(): void {
        const newTableData = tableData.map(row => [...row, '']);

        setTableData(newTableData);
    }
    return (
        true
    )

}