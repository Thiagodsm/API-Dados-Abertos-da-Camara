import React, {useState, useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid'
import api from '../api/APIUtils';
import { width } from '@mui/system';

const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'nome', headerName: 'Nome', width: 300},
    {field: 'siglaPartido', headerName:'Sigla Partido', width: 200},
    {field: 'siglaUf', headerName:'Sigla UF', width: 150},
    {field: 'idLegislatura', headerName:'ID Legislatura', width: 200},
    {field: 'email', headerName:'E-mail', width: 300}
]


function DataTable() {

    const [tableData, setTableData] = useState({dados: [], links: []}, 5)

    //userEffect(async () => await api.getDeputado());
    useEffect(() => {
        api.getDeputados().then((response) => {
            //console.log(response.data.dados)
            //console.log(response.data.links)
            setTableData(response.data);
        });
    }, []);



    return (
        <div style={{height: 700, width: '100%'}}>
            <DataGrid
                pageSize={10}
                onPageSizeChange={(newPageSize) => setTableData(newPageSize)}
                rowsPerPageOptions={[]}
                pagination
                {...tableData.dados}
                rows={tableData.dados}
                columns={columns}
                checkboxSlection
            ></DataGrid>    
        </div>
    )
}

export default DataTable
