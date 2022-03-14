import React, {Component} from "react";
//import logo from './logo.svg';
import Customer from "./components/Customer";
import './App.css';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { withStyles } from "@mui/styles";
import { spacing } from "@mui/system";

const styles = {
  root: {
    width: '100%',
    marginTop: spacing(3),
    overflowX: "auto"
  }, 
  table: {
    minWidth: 1080
  }
};

const customers = [
  {
  'id':1,
  'image':"https://placeimg.com/64/64/1",
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남',
  'job':'대학생'
  }, 
  {
    'id':2,
    'image':"https://placeimg.com/64/64/2",
    'name':'전희수',
    'birthday':'900226',
    'gender':'남',
    'job':'프로그래머'
  }, 
  {
      'id':3,
      'image':"https://placeimg.com/64/64/3",
      'name':'김소영',
      'birthday':'850406',
      'gender':'여',
      'job':'디자이너'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props?this.props:null;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(c=>{return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }  
}

export default withStyles(styles)(App);
