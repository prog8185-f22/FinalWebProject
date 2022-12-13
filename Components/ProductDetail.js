import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {Navbar} from './Navbar'
import {Icon} from 'react-icons-kit'
import {auth,fs} from '../config/config'
import {doc, getDoc} from "firebase/firestore"
import { collection,addDoc } from 'firebase/firestore'
import { AddProducts } from './AddProducts';
import {userTie} from 'react-icons-kit/icomoon/userTie'


function ProductDetail()
{
    const [user, setUser]=useState(null);

    // getting current user function
    function GetCurrentUser(){
       
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    fs.collection('users').doc(user.uid).get().then(snapshot=>{
                        setUser(snapshot.data().FullName);
                    })
                }
                else{
                    setUser(null);
                }
            })
        },[])
        return user;
    }

    const user1 = GetCurrentUser();


    const location = useLocation();
    console.log(location.state)

    const [singleDoc, setSingleDoc]=useState({});
    const [allDocs,setAllDocs]=useState([]); 

    //add comment to firebase
    const [comment,setComment] = useState('');
    
    const databaseRef = collection(fs,'comments');
    const handleAddComment = () =>{
        addDoc(databaseRef,{comment:comment,
        user:user1})
       .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        
    }

    useEffect(()=>{        
        fs.collection('Products')
        .doc(location.state.productId)
        .get()
        .then((snapshot) => {
            if(snapshot)
            {
                setSingleDoc(snapshot.data());
            }});     
    },[])  

    console.log(singleDoc);

    useEffect(() => {
        fs.collection('comments')
        .get()
        .then((snapshot) => {
            if(snapshot.docs.length>0){
            snapshot.docs.forEach((doc) =>{
                setAllDocs((prev)=>{
                    return[...prev,doc.data()];
                });
            });
        }
        });
    },[])

    console.log(allDocs);
// state of totalProducts
const [totalProducts, setTotalProducts]=useState(0);
// getting cart products   
useEffect(()=>{        
    auth.onAuthStateChanged(user=>{
        if(user){
            fs.collection('Cart ' + user.uid).onSnapshot(snapshot=>{
                const qty = snapshot.docs.length;
                setTotalProducts(qty);
            })
        }
    })       
},[])  

   
 return(

        <div>
            <Navbar user={user} totalProducts={totalProducts} />           
            <br></br>
         <h3>{singleDoc.category}</h3>
         <div className='product-img'>
                <img src={singleDoc.url} alt="product-img"/>
            </div>
            <br></br>
         <h1><h2>{singleDoc.title}</h2></h1>
         <br></br>
         <div><h5><b>Description</b></h5></div>
         <h1><h6>{singleDoc.description}</h6></h1>
         <br></br>
         <div><h5><b>Price</b></h5></div>
         <h1><h6><b>$ {singleDoc.price}</b></h6></h1>
         <br></br>
         <div><h5><b>Reviews:</b></h5></div>
         <br></br>
         <div>
            {allDocs.map((doc)=>
            {
                return(
                    <div class="detail">
                        <Icon icon={userTie} size={25} class="detailComment"/>
                        <h6 class="detailComment"><b>{doc.user}</b> </h6>
                        <h6>{doc.comment}</h6>
                        <br></br>
                    </div>
                    
                
                )
            })}
         </div>

         <h5><b>Customer review</b></h5>
         <label><b>Comment</b></label>
         <textarea rows="4" cols="50" name="comment" form="usrform"
         value={comment} onChange={(e)=> {setComment(e.target.value)}}></textarea>
         <br></br>
         <button type="submit" className='btn btn-success btn-md' onClick={handleAddComment}>
                        SUBMIT
                    </button>
        </div>
    )
}

export default ProductDetail 

    
   
