import { useState } from "react"
import { RMIUploader } from "react-multiple-image-uploader";
import axios from 'axios'
import { useFormik } from 'formik';
import './Image.css';

export default function Fileupload() {
    const [dataSources, SetdataSources] = useState([])

    const onUpload =async(data) => {
        SetdataSources(data)
        try {
            await axios.post('http://localhost:8000/upload',data)
            alert('Successfully Image upload')
        } catch (error) {
            console.log(error);
        }
    };
    
    const onSelect = (data) => {
        SetdataSources(data)
    };
    const onRemove = (e) => {
        const s = dataSources.findIndex((obj) => obj === e)
        dataSources.splice(s, 1);
        SetdataSources([...dataSources])
    };

    const login = useFormik({
        initialValues: {
            Firstname: "",
            Lastname: "",
            Email:"",
            Password: "",
            Phone: "",
            Mobile:"",
            Address: "",
            Address_2: "",
            City:"",
            State:"",
            Zip:"",

        },
        validate: () => {
            let errors = {};
            return errors
        },
        onSubmit: async (formData) => {
            try {
                let check = await axios.post('http://localhost:8000/User/Upload', formData);
                console.log(check);
                alert("Form Submitted")
            } catch (error) {
                
            }
        }
    })

    return (
        <>
            <form className="row g-3 m-5 form" onSubmit={login.handleSubmit}>
                {/* Name */}
                <div className="col-md-6">
                    <label htmlFor="inputFirstname" className="form-label">Firstname</label>
                    <input type="text" className="form-control" id="inputFirstname" value={login.values.Firstname} onChange={login.handleChange} name="Firstname" required  />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastname" className="form-label">Lastname</label>
                    <input type="text" className="form-control" id="inputLastname" value={login.values.Lastname} onChange={login.handleChange} name="Lastname" required/>
                </div>
                {/* Email */}
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" value={login.values.Email} onChange={login.handleChange} name="Email" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" value={login.values.Password} onChange={login.handleChange} name="Password" required/>
                </div>

                {/* Number */}
                <div className="col-md-6">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="inputPhone" value={login.values.Phone} onChange={login.handleChange} name="Phone" required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputMobile" className="form-label">Mobile</label>
                    <input type="number" className="form-control" id="inputMobile" value={login.values.Mobile} onChange={login.handleChange} name="Mobile" required/>
                </div>

                {/* Address */}
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={login.values.Address} onChange={login.handleChange} name="Address" required/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address_2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={login.values.Address_2} onChange={login.handleChange} name="Address_2" required />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" value={login.values.City} onChange={login.handleChange} name="City" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <input type="text" className="form-control" id="inputState" value={login.values.State} onChange={login.handleChange} name="State" required/>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" value={login.values.Zip} onChange={login.handleChange} name="Zip" required/>
                </div>

                {/* image */}
                <div className="col-md-12">
                    <RMIUploader
                        onSelect={onSelect}
                        onUpload={onUpload}
                        onRemove={() => { onRemove(dataSources) }}
                        dataSources={dataSources}
                    />
                </div>

                <div className="col-12 Click">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </>
    )
}