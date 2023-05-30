import React,{Fragment,useState,useEffect} from 'react'
import { Await, useLocation } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios'

export function Inicio() {
    
    const {register,handleSubmit} = useForm();
    let navigate = useNavigate();
    const [texto, settexto] = useState([]);

      const onSubmit = async(data) =>{
        try{
            const response = await axios.post('http://localhost:3001/traductor/tranductor',{data:data});
            settexto(response.data);;
        }catch(err){
                alert('An error occurred')
        }
    }
  return (
      <Fragment>
          <header className="App-header">
                  
              <div style={{ backgroundImage: 'url(require("./Imagenes/background.png"))'}}>
                  <div className='container mx-auto'>
                      <h1 className='text-center'>TextTranslateSummarizer</h1>
                      <br/>
                      <form onSubmit={handleSubmit(onSubmit)} >
                      <div className="row row-cols-1 row-cols-md-1 g-1" >

                          <textarea  {...register('text',{required:true})}>
                          </textarea>
                          <br />
                          <br />
                          <center>
                                <button type="submit" className= "btn btn-dark text-center" >Resumir</button>    
                            </center>
                            </div>
                            <div className="row row-cols-2 row-cols-md-2 g-2" >
                                <div className="col">
                                <center>
                                    <h2>Resumen</h2>
                                    </center>
                                    <textarea style={{width:'90%'}} value = {texto[0].texto} readOnly>
                                    </textarea>
                                    </div>
                                    <div className="col">
                                    <center>
                                        <h2>Resumen traducido</h2>
                                    </center>
                                    <textarea style={{width:'90%'}} value = {texto[0].traduc} readOnly>
                                    </textarea>
                                    </div>
                    </div>
                      </form>
                  </div>
              </div>
                         
          </header>
      </Fragment>
    )
  }