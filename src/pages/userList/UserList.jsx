import React from 'react'
import './userList.css';
import { DeleteOutline } from '@material-ui/icons'
import { DataGrid } from '@material-ui/data-grid';
import { userRows } from '../../dummyData';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
    const [data, setData]=useState(userRows);
    const handleDelete= (id)=>{
        setData(data.filter(item=> item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (param) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={param.row.avatar} alt="" />
                        {param.row.username}
                    </div>
                );
            }

        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,

        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,

        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 200,

        },

        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            renderCell: (param) => {
                return (
                    <>
                        <Link to={`user/${param.id}`}><button className="userListEdit">Edit</button></Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(param.id)} />
                    </>
                );
            }
        }
    ];



    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
