import TextField from '@mui/material/TextField';
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Apitest() {

    var [apivalue, updatevalue] = useState([]);
    var [inputvalue, updateinputvalue] = useState({
        name: '',
        age: '',
        salary: '',
    })

    useEffect(() => {
        axios.get('https://dummyapi.online/api/movies')
            .then(response => {
                // console.log('table data response', response)
                updatevalue(response.data)
                console.log('fetchedvalueto the variable', apivalue)
            })
            .catch(error => {
                console.error('errrorrrrrrrr',error);
                alert(error.message)
            });
    }, []);

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log(data)
    //   },(error)=>{
    //     console.log(error)
    //   }
    //   )

    var submittoapi = () => {
        console.log(inputvalue)

        axios.post('https://dummy.restapiexample.com/api/v1/create', inputvalue)
            .then(function (response) {
                // console.log(response);
                if (response.status == 200) {

                    alert(response.data.message);
                    updateinputvalue({
                        name: '',
                        age: '',
                        salary: '',
                    })

                }
            })
            .catch(function (error) {
                console.error('errrorrrrrrrr',error);
                alert(error.message)
            });

    }

    var onhandlechange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        // console.log('input value', name, value, e.target)
        updateinputvalue(pre => ({
            ...pre,
            [name]: value
        }))
    }

    return (
        <>



            <label>Name</label><br></br>
            <TextField
                // style={styles.input}
                name="name" placeholder="name" value={inputvalue.name} onChange={onhandlechange}
            />
            <br></br>
            <label>Salary</label><br></br>
            <TextField
                // style={styles.input}
                name="salary" placeholder="salary" value={inputvalue.salary} onChange={onhandlechange}
            />
            <br></br>
            <label>Age</label><br></br>
            <TextField
                // style={styles.input}
                name="age" placeholder="age" value={inputvalue.age} onChange={onhandlechange}
            />
            <br></br>
            <br></br>

            <Button variant='contained' onClick={submittoapi} >submit</Button>
            <br></br>
            <br></br>

            <div className="marginwidth" >
               

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>S.No</TableCell>
                                <TableCell align="left">Movie</TableCell>
                                <TableCell align="left">Rating</TableCell>
                                <TableCell align="left">IMDB</TableCell>
                                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          

                            {apivalue.map((item, index) => {
                                return (
                                    <TableRow key={item.id}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{item.movie}</TableCell>
                                        <TableCell>{item.rating}</TableCell>
                                        <TableCell><a href={item.imdb_url} target='_blank' >{item.imdb_url} </a> </TableCell>
                                    </TableRow>
                                );
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

        </>
    )

}

export default Apitest;