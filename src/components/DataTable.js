import React, {useState, useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid'
import apiDadosAbertos from '../api/APIUtils';

const columns = [
    {field: 'nome', headerName: 'Nome', width: 300},
    {field: 'siglaPartido', headerName:'Sigla Partido', width: 200},
    {field: 'siglaUf', headerName:'Sigla UF', width: 150},
    {field: 'idLegislatura', headerName:'ID Legislatura', width: 200},
    {field: 'email', headerName:'E-mail', width: 300}
]


function DataTable() {

    const [tableData, setTableData] = useState({dados: [], links: []})
    const [rowsPerPage, setRowsPerPage] = useState(10);

    //userEffect(async () => await api.getDeputado());
    useEffect(() => {
        apiDadosAbertos.getDeputados().then((response) => {
            //console.log(response.data.dados)
            //console.log(response.data.links)
            setTableData(response.data);
        });
    }, []);



    return (
        <div style={{height: 700, width: '100%'}}>
            <DataGrid
                pageSize={rowsPerPage}
                onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
                rowsPerPageOptions={[5,10,20]}
                pagination
                {...tableData.dados}
                rows={tableData.dados}
                columns={columns}
                checkboxSelection
            ></DataGrid>    
        </div>
    )
}

export default DataTable
