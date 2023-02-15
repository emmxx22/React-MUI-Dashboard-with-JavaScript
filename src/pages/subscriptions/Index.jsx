import React, {useEffect, useRef, useState} from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from "axios";
// import DataTable from './Index';
import { borderLabelToBlackOutlined } from './../../objects/objects';


const DataTable = () => {

  const [userData, setUserData] = useState([])
  useEffect(() =>{fetch('https://jsonplaceholder.typicode.com/users')
  .then((data) => data.json())
  .then((data) => setUserData(data))
  }, []);
  
  
  // console.log(userData)

  const modifiedData = userData.map(({body, ...item})=>({
    ...item,
    key: userData.id,
    // name: userData.name
  }))

  console.log(modifiedData)

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Full Name', width: 130 },
  { field: 'username', headerName: 'USERNAME', width: 130 },
  { field: 'email', headerName: 'EMAIL', type: 'string', width: 90, },
  { field: 'phone', headerName: 'PHONE', type: 'string', width: 90, },
  {field: 'website',headerName: 'WEBSITE',description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={modifiedData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );

};


export default DataTable