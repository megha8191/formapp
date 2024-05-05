# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Notes

## Form Handling
-<textarea close iteself> , <legend> for main label, <fieldset> for all check and radio outer div
-object state for form
-htmlfor for checkbox label
-controlled components


## React Router
<Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
 </Routes> 

 root.render(
       <BrowserRouter>
       <App/> 
    </BrowserRouter>   
 );
 -navlink for active link ,willa add active class for active
 <NavLink to="/">Home</NavLink>

-Child element and outlet and default index
  <Routes>
        <Route path="/" element={<div> <Header/><Outlet/> </div>}>
          <Route index element={<div>default element for "/" route and "/" outlet.</div>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path='/about' element={<Aboutus/>}></Route>
        </Route>
        <Route path='/form' element={<Formcmpt/>}></Route>
        <Route path='*' element={<div>Error not found</div>}></Route>
     </Routes>


## Navigate to other page with data 
-useNavigate()
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
navigate("/about)


we can even pass data with navigate : 
navigate('/result', { state: { formdata: formdata, additionalData: additionalData } });

and catch it with:
const location = useLocation();
const formdata = location?.state?.formdata;

useLocation() :This hook returns the current location object. 
gives location.key | location.pathname | location.search |  location.state



## Navigate to other page with data (Without useLocation)
 we can do it without uselocation by defining formdata in app.js and pass formdata and setFormdata to Formcmpt and result like this :
<Route path='/form' element={<Formcmpt formdata={formdata} setFormdata={setFormdata} />} />
