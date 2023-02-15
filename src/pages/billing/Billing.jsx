import React, {useEffect, useRef, useState} from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { borderLabelToBlackOutlined } from './../../objects/objects';


const DataTable = () => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd1f7c46b7dmsh4a83355fa54a2bdp190d34jsne530d4fa763d',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  const [UserData, setUserData] = useState([])
  
  useEffect(() =>{fetch('https://covid-193.p.rapidapi.com/statistics', options)
    .then(response => response.json())
    .then(response => setUserData(response))
    .catch(err => console.error(err));

}, []);

  
  console.log(UserData)

  const modifiedDatass = UserData.map(({body, ...item})=>({
    ...item,
  key: UserData.id,
  
  }))

  console.log(modifiedDatass)

// const columns: GridColDef[] = [
//   { field: 'continent', headerName: 'ID', width: 70 },
//   { field: 'country', headerName: 'Full Name', width: 130 },
//   { field: 'population', headerName: 'DOB', width: 130 },
//   { field: 'day', headerName: 'COUNTY', type: 'string', width: 90, },
//   { field: 'time', headerName: 'PHONE', type: 'string', width: 90, },
//   { field: 'region', headerName: 'REGION', type: 'string', width: 90, },
//   {field: 'salary',headerName: 'SALARY',description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//   },
// ];

//   return (
//     <div style={{ height: 900, width: '100%' }}>
//       <DataGrid
//         rows={modifiedData}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[10]}
//         checkboxSelection
//       />
//     </div>
//   );



};


export default DataTable