import { useState } from "react"
import Sideimg from "../src/assets/3719231.png"
import done from "../src/assets/done.png"

function TodoGenerator (){
  let i=0

  const [TodoArr, updateTodoArr] = useState([]);
    
      let SaveTodo = (e) =>{
        e.preventDefault()
        
          updateTodoArr([...TodoArr,
            {
            id:i,
            MedicineName: e.target[0].value,
            PrescribedTime: e.target[1].value
            }]
          )
          i++
      }

      function HandleDeleteClick(todoid){
        
        updateTodoArr(
          TodoArr.filter((filterele) => TodoArr.indexOf(filterele)!=todoid)
        )
      }

    return(
      <div>
        <div className=" ml-16">
          <div className="Logo and Heading flex flex-row">
              <img id="logo" className="w-auto h-10 mt-6" src="https://static.vecteezy.com/system/resources/previews/010/145/911/original/medicine-icon-sign-symbol-design-free-png.png" alt="Medicine Icon" />
              <p className=" font-semibold text-3xl font-serif mt-7 text-gray-700 ml-2">Medi<span className=" text-sky-600">Minder</span></p>
              <button className=" w-24 h-8 bg-cyan-600 text-white mt-7 rounded-md ml-[1030px]" onClick={()=>{updateTodoArr([])}}>Renew</button>
          </div>

    <div className=" flex flex-row gap-32">
        <form className=" flex flex-col mt-16 ml-5" onSubmit={SaveTodo} >
          <h1><span className=" text-4xl font-semibold font-serif text-gray-800">Again forgot to take <span className=" text-green-600"> medicines!</span></span></h1>
          <p className=" text-2xl font-serif font-medium mt-1">Don't worry, We Gotchu </p>
        <p className=" text-2xl font-bold text-gray-700 mt-6">Add a New Reminder</p>
        <p className=" text-gray-500 font-regular mt-3 text-sm">Set your medicine schedule with ease</p>
          <input className=" outline-none w-[400px] h-8 bg-transparent border-gray-300 border-2 mb-6 pl-2" type="text" placeholder="Medicine Name" required/>
          <label className=" text-sm text-gray-500" htmlFor="phoneno">Enter the time to receive the alert</label>
          <input id="phase" className=" w-[400px] h-8 border-gray-300 border-2 outline-none pl-1 text-gray-600" type="time"/>
          <label className=" mt-4 text-sm text-gray-500" htmlFor="phoneno">Enter your phone number to receive reminder</label>
          <input className=" outline-none w-[400px] h-8 bg-transparent border-gray-300 border-2 pl-2" name="Phoneno" id="phoneno" type="tel" placeholder="e.g. 70493722822" pattern="[0-9]{10}"/>
          <input className=" w-32 h-8 mt-5 bg-cyan-600 text-white rounded-sm" type="submit" value="Save Reminder" />
        </form>
        <div>
          <img className=" w-[620px] h-auto ml-6" src={Sideimg} alt="Sideimage" />
        </div>
      </div>
      </div>
      <hr />

      <div id="Medicinelist">
      <div className="flex flex-row mt-5">
        <p className=" font-bold text-2xl text-gray-700 pl-14 font-serif"> Saved <span className=" text-sky-600">Medication</span> Reminders</p>     
        <img className=" w-8 h-8 ml-1" src="https://cdn-icons-png.flaticon.com/512/4777/4777604.png" alt="reminder" />
   
        </div>
        <div>
          <ol className="todolines flex flex-row gap-8 mt-5 ml-12">
            {TodoArr.map((dataval,  index)=>(
              <li className="w-auto h-auto p-5 rounded-2xl font-medium text-gray-800 text-lg font-sans bg-sky-600 shadow-2xl mb-8" key={index}> 
              <div className="flex flex-col">
                     <span className=" font-semibold text-2xl mb-3 mt-2 text-white flex flex-row justify-between" >
                      {dataval.MedicineName}
                      <img className=" w-7 h-7" src={done} alt="Done" onClick={()=>HandleDeleteClick(index)}/>
                     </span>
                     
                     <span className=" text-gray-300">
                      Dosage Type: {dataval.PrescribedTime}
                     </span>
                      <div className="  flex flex-row gap-6 text-sm mt-2">
                     <input className=" bg-gray-800 p-1 px-3 rounded-md text-white" type="button" value="Remove" onClick={()=>HandleDeleteClick(index)}/>
                     </div>
                     </div>
              </li>
            ))}
          </ol>
        </div>

    </div>
    </div>
    )
}

export default TodoGenerator