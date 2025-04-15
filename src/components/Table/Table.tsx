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
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        {tableData[0].map((_, columnIndex) => (
                            <th key={`header-${columnIndex}`}>
                                Column {columnIndex + 1}
                            </th>
                        ))}
                        <th>
                            <button onClick={addColumn}>+</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <TableRow 
                        key={`row-${rowIndex}`} 
                        rowData={row} /* Need to implement the TableRow type */
                        rowIndex={rowIndex} 
                        />
                    ))}
                    <tr>
                        <td colSpan={tableData[0].length + 1}>
                            <button onClick={addRow}>Add Row</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}