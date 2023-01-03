import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function PasswordReset() {

    const [validUrl, setValidUrl] = useState(false);
	const [password, setPassword] = useState("");
	const param = useParams();
	const url = `https://ecommerce-qrcj.onrender.com/api/sign/${param.id}/${param.token}`;


    const notify = () => toast.success('Password Change Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
   
        const forgotpasswordunsuccess = (data) => toast.error(data, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         })


	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(url, { password });
     notify()
      setTimeout(() => {
        window.location.href = "/";
      }, 5000)
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        forgotpasswordunsuccess(error);
			}
		}
	};


  return (
    <Fragment>
    {validUrl ? (
        <div>
            <section className="vh-90" id="aaa">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100" >
        <div className="col-md-9 col-lg-6 col-xl-5">
        <h2 id="aoo-">AOO... </h2>
          <h3 id="aoos">Forgot-Password</h3>
          <h3 id="aooss">Page</h3>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={handleSubmit}>
          <h3 id="asxa">AOO... Forgot Password </h3>
            <div className="form-outline mb-4">
              <input type="password" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter New Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <label className="form-label" for="form3Example3">Email address</label>
            </div>
    <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" id="azz"  className="btn btn-lg" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Forgot Password</button>
            </div>
          </form>
          <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored" />
        </div>
      </div>
    </div>
  </section>
        </div>
    ) : (
        <h1>404 Not Found</h1>
    )}
</Fragment>
  )
}

export default PasswordReset;