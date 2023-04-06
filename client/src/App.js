import './App.css';
import { useState, useEffect } from 'react';
import { getAllData, addData } from './services/ApiService';


function App() {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await getAllData();
        setData(result);
      };
      fetchData();
    }, []);


    const [formData, setFormData] = useState({ name: '', age: '', job: '' });

    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await addData(formData);
      console.log(result);
    };
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };


  return (
    <div className="App">
      <div className='container-fluid' >
        <div className='container' id='maintitle'>
            <h1>LISTA DA FUNCIONARIOS</h1>
        </div>
        <div className='container' id='tablefuncionarios'>
        <table className='table' >
      <thead>
              <tr className="table-dark">
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
              </tr>
      </thead>
      {data.map((employee) => (
            <tbody key={employee.id}>
              <tr className="table-primary"> 
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.job}</td>
              </tr>
              </tbody>
          ))}
          </table>
        </div>
        <div>
          
        <form onSubmit={handleSubmit}>
        
          <div className='container'>
              <div className='form-group'>
                <label>
                  Name:
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
              </div>
    
            <div className='form-group'>
              <label>
                Age:
                <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
              </label>
            </div>

            <div className='form-group'>
              <label>
                Job:
                <input type="text" name="job" value={formData.job} onChange={handleInputChange} />
              </label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>



        </div>
      </div>
   
    </div>
  );
}

export default App;
