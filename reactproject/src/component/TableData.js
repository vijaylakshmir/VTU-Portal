import React,{useEffect,useState} from "react";
import { Table,Container } from "react-bootstrap";
import axios from "axios";
import { ToWords } from "to-words";

const TableData = ({studentId}) => {
    console.log("studentId",studentId)

    const[resultInfo,setResultInfo]=useState([])

    const towords = new ToWords()

    useEffect(()=>{
        axios.get(' http://localhost:3004/resultData')
        .then((response)=>{
            console.log("res",response.data)
            const temp = response.data.filter(
              (data) => data.registerId === studentId)
              setResultInfo(temp)  
             })
        },[resultInfo])

        console.log("result",resultInfo)

        const getTotalMarks =(value) => {
            let sum=0;
            resultInfo.map((data)=>{
                sum += parseInt(data[value])
            })
            return sum
        }

        const totalScore =()=>{
            let count=0;
            resultInfo.map((d)=>{
                if(d.result === 'PASS'){
                    count++;
                }
            })
            console.log("count",count)
            if(count <= 3){
                return 'FAIL'
            }else{
                return 'PASS'
            }
        }

        const semesterResult = () => {
            let sum=0;
            resultInfo.map((d)=>{
                sum += Number(d.obtained_marks)
            })

            let status;
            if( sum >= 255){
                status='Distinction'
            } else if(sum <= 255 && sum >= 200){
                status='First Class'
            }
            // else if(sum <= 200 && sum >= 170){
            //     status = 'Second Class'
            // }
            else{
                status = 'Fail'
            }
            return status
        }

        const percentageHandler = () =>{
            let max = getTotalMarks('max')
            let obtained = getTotalMarks('obtained_marks')
            let x='%' , percent = Math.ceil((obtained/max)*100).
            toFixed(2)
            return[percent,x]
        }

        const TotalMarksInWords = () => {
            let y = getTotalMarks('obtained_marks')
            let text = towords.convert(y)
            return text
        }

  return (
    <Container>
     <Table bordered responsive striped>
        <thead>
            <tr>
                <th>Sl No</th>
                <th colSpan={2}>Subject
                <th style={{padding:"0 3rem"}}>Subject_Code
                </th>
                <th style={{padding:"0 3rem"}}>Subject</th>
                </th>
                <th colSpan={3}>Examination Marks Obtained
                <th style={{padding:"0 3rem"}}>Max</th>
                <th style={{padding:"0 3rem"}}>Min</th>
                <th style={{padding:"0 3rem"}}>Obtained</th>
                </th>
           <th>Subject Result</th>           
        </tr>
        </thead>
        <tbody>
            {
                resultInfo.map((d,index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{d.code}</td>
                        <td>{d.subject}</td>
                        <td>{d.max}</td>
                        <td>{d.min}</td>
                        <td>{d.obtained_marks}</td>
                        <td>{d.result}</td>
                    </tr>
                ))
            }
           <tr>
            <th colSpan={3}>Grand Total</th>
            <td>{getTotalMarks('max')}</td>
            <td>{getTotalMarks('min')}</td>
            <td>{getTotalMarks('obtained_marks')}</td>
            <td>{totalScore()}</td>
           </tr>
        </tbody>
        </Table> 
        <p><b>Total Marks Obtained[In Words]:</b>&nbsp;&nbsp;
        {TotalMarksInWords()}</p>
        <p><b>Result of Semester:</b>&nbsp;&nbsp;{semesterResult()}
        </p>
        <p><b>Percentage:</b>&nbsp;&nbsp;{percentageHandler()}</p>
        <p><b>Date:</b>&nbsp;&nbsp;05 Dec 2023</p>
    </Container>
  )
}

export default TableData
