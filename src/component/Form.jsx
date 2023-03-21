import React, { useState } from "react"
import Result from "./Result"

let arr = []

const Form = () => {
   let [name, setName] = useState("")
   let [lname, setLname] = useState("")
   let [email, setEmail] = useState("")
   let [phone, setPhone] = useState("")
   let [gender, setGender] = useState("")
   let [password, setPassword] = useState("")
   let [checqbox, setChecqbox] = useState("")
   let [bordererr, setbordererr] = useState("")

   let [error, setError] = useState("")
   let [numerror, setNumerror] = useState("")
   let [term, setTerm] = useState("")
   let [successfullly, setSuccessfullly] = useState()

   let [data, setData] = useState("")
   let [edit, setEdit] = useState(null)

   console.log(data)

   function saveData(e) {
      setSuccessfullly(() => {
         const timeoutID = setTimeout(() => {
            console.log("hello")
         }, 1000)

         return () => {
            clearTimeout(timeoutID)
         }
      }, [])
      e.preventDefault()
      if (
         name === "" ||
         name.length < 3 ||
         lname === "" ||
         email === "" ||
         phone === "" ||
         phone.length < 10 ||
         phone.length > 11 ||
         gender === "" ||
         password === "" ||
         checqbox === false
      ) {
         setError("**please fill the feild")
         setbordererr("border border-danger")
         setNumerror("number is invalid")
         setTerm("please accept the term and condition")
      } else {
         if (edit == null) {
            arr.push({ name, lname, email, phone, gender, password, checqbox })
         } else {
            arr[edit] = {
               name,
               lname,
               email,
               phone,
               gender,
               password,
               checqbox,
            }
            setEdit(null)
         }
         setName("")
         setLname("")
         setEmail("")
         setPhone("")
         setPassword("")
         setGender("")
         setChecqbox(false)
         setError("")
         setbordererr("")
         setNumerror("")
         setTerm("")
         setSuccessfullly("Form submited successfully")

         setTimeout(() => {
            setSuccessfullly("")
         }, 3000)
      }
   }

   function deleteData(index) {
      setData(arr.splice(index, 1))
   }

   function editData(index) {
      setEdit(index)
      setName(arr[index].name)
      setLname(arr[index].lname)
      setEmail(arr[index].email)
      setPhone(arr[index].phone)
      setPassword(arr[index].password)
      setGender(arr[index].gender)
      setChecqbox(arr[index].checqbox)
   }

   return (
      <>
         <div className="cont m-3 mx-auto p-3 position-relative">
            <h1>Form</h1>
            <div className="text-success bg-light position-absolute">
               {edit == null ? successfullly : ""}
            </div>
            <form action="" className="form m-3" onSubmit={saveData}>
               <div className="form-item">
                  <label htmlFor="name">Name</label>
                  <input
                     className={name === "" ? bordererr : ""}
                     type="text"
                     name="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  <div className="font-small">
                     {name === "" || name.length < 3 ? error : ""}
                  </div>
               </div>

               <div className="form-item">
                  <label htmlFor="name">Last Name</label>
                  <input
                     className={lname === "" ? bordererr : ""}
                     type="text"
                     name="name"
                     value={lname}
                     onChange={(e) => setLname(e.target.value)}
                  />
                  <div className="font-small">{lname === "" ? error : ""}</div>
               </div>

               <div className="form-item">
                  <label htmlFor="email">Email</label>
                  <input
                     className={email === "" ? bordererr : ""}
                     type="email"
                     name="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="font-small">{email === "" ? error : ""}</div>
               </div>

               <div className="form-item">
                  <label htmlFor="phone">Phone</label>
                  <input
                     className={phone === "" ? bordererr : ""}
                     type="number"
                     name="phone"
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="font-small">
                     {(phone === "" ? error : "") ||
                        (phone.length < 10 || phone.length > 11
                           ? numerror
                           : "")}
                  </div>
               </div>

               <div className="form-item">
                  <label htmlFor="gender">Gender</label>
                  <div className="d-flex">
                     <input
                        className="me-2"
                        id="male"
                        type="radio"
                        name="gender"
                        value={"male"}
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                     />
                     <label htmlFor="male"> male</label> &nbsp;
                     <input
                        className="me-2"
                        id="female"
                        type="radio"
                        name="gender"
                        value={"female"}
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                     />
                     <label htmlFor="female">female</label>
                  </div>
                  <div className="font-small">{gender === "" ? error : ""}</div>
               </div>

               <div className="form-item">
                  <label htmlFor="password">Password</label>
                  <input
                     className={password === "" ? bordererr : ""}
                     type="password"
                     name="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="font-small">
                     {password === "" || password.length < 6 ? error : ""}
                  </div>
               </div>

               <div className="py-2 align-center">
                  <div className="d-flex">
                     <div className="me-2">
                        <input
                           type="checkbox"
                           name="checkbox"
                           checked={checqbox}
                           onChange={(e) => setChecqbox(true)}
                        />
                     </div>
                     <div>
                        Accept
                        <a href="/" className="text-primary">
                           term and condition
                        </a>
                     </div>
                  </div>
                  <div>
                     <p className="term text-danger">
                        {checqbox === false ? term : ""}
                     </p>
                  </div>
               </div>

               <button className="btn btn-success" type="submit">
                  {edit == null ? "submit" : "Update"}
               </button>
            </form>
         </div>

         <Result array={arr} deleteData={deleteData} editData={editData} />
      </>
   )
}

export default Form
