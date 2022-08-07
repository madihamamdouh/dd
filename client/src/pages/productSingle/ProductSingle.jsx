import "./productSingle.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../Redux/Actions/ProductAction";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashContext from "../../components/dataContext";

// const ToastObjects = {
//   pauseOnFocusLoss: false,
//   draggable: false,
//   pauseOnHover: false,
//   autoClose: 2000,
// };
function ProductSingle() {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const {products} = useContext(DashContext);
  const productCreate = useSelector((state) => state.productCreate);
  const { isFetching, error, product } = productCreate;
  /******************************************************************* */


  
  /******************************************************************* */


  useEffect(() => {

    

  
    console.log(products);
  }, [products]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(name, price, description, image, countInStock));
  };
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link to="/products/update" style={{ textDecoration: "none" }}>
              <div className="editButton">Edit</div>
            </Link>
            <h1 className="title">Product Info</h1>
            <div className="item">
              <img
                src="https://cdn.sklum.com/ie/1062614/sofa-de-2-plazas-en-lino-y-tela-aktic.jpg"
                alt=""
                className="itemImge"
              />
              <div className="details">
                <h1 className="itemTitle">Product ID: 1</h1>
                <div className="detailItem">
                  <span className="itemKey">Name:</span>
                  <span className="itemValue">Sofa</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">450$</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">Width : " " , Height :" "</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Made In:</span>
                  <span className="itemValue">KSA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 2} title="Product Sales( Last 6 Months)" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSingle;
