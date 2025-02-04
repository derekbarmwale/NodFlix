import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useEffect } from 'react';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

export default function ProductList() {
  const {movies, dispatch} = useContext(MovieContext)
  
  useEffect(()=>{
    getMovies(dispatch)
  },[dispatch])

  const handleDelete = (id) =>{
    deleteMovie(id, dispatch)
  }


  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: (params)=>{
          return(
              <div className="productListItem">
                  <img className='productListImg' src={params.row.img} alt="" />
                  {params.row.title}
              </div>
          )
          }
    },
    {field: 'genre', headerName: 'Genre',width: 120, editable: true},
    {field: 'year', headerName: 'year',width: 120, editable: true},
    {field: 'limit', headerName: 'limit',width: 120, editable: true},
    {field: 'isSeries', headerName: 'isSeries',width: 120, editable: true},
   
    {
        field:'action',
        headerName:'Action',
        width:150,
        renderCell: (params)=>{
            return(
                <>
                    <Link to={{ pathname: "/product/" + params.row._id, movie: params.row}}>
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
            rows={movies}
            columns={columns}
            pageSize={8}
            checkboxSelection
            disableSelectionOnClick
            getRowId={(r) => r._id}
      />

    </div>
  )
}
