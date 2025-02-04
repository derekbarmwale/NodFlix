import './listList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ListContext } from "../../context/listContext/ListContext"
import { useContext } from 'react';
import { useEffect } from 'react';
import {  deleteList, getLists } from '../../context/listContext/apiCalls';

export default function ListList() {
  const {lists, dispatch} = useContext(ListContext)
  
  useEffect(()=>{
    getLists(dispatch)
  },[dispatch])

  const handleDelete = (id) =>{
    deleteList(id, dispatch)
  }


  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {field: 'title', headerName: 'title',width: 250, editable: true},
    {field: 'genre', headerName: 'Genre',width: 150, editable: true},
    {field: 'type', headerName: 'type',width: 150, editable: true},

    {
        field:'action',
        headerName:'Action',
        width:150,
        renderCell: (params)=>{
            return(
                <>
                    <Link to={{ pathname: "/list/" + params.row._id, list: params.row}}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row._id)}/>
                </>
            )
        }
    },
  ];
  

  return (
    <div className="productList">
  
        <DataGrid
            rows={lists}
            columns={columns}
            pageSize={8}
            checkboxSelection
            disableSelectionOnClick
            getRowId={(r) => r._id}
      />

    </div>
  )
}
