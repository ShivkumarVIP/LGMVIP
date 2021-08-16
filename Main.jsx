import React,{Component} from 'react';
import "./Main.css";
import Cards from "./Cards";

class Main extends Component{
    state={
        users:[],
        loading:false,
    };

CheckedClick=(event)=>{
    this.setState({loading:true});
};
async componentDidMount(){
    try{
        const response=await fetch("https://reqres.in/api/users?page=1");
        const user=await response.json();
        console.log(user);
        setTimeout(()=>{
            this.setState({users:user.data,loading:false});

        },200);

    }catch(error){
        console.log(error);
        
    }
}
render ()
{
  return(
      <div>
      <nav className="navbar  navbar-expand-lg bg-default mb-5">
      <a className="navbar-brand text-white ml-5"><img src="logo192.png"></img></a>
      
      <div className="d-flex">
        
            <button onClick={this.CheckedClick} type="button" className="btn btn-danger mr-5">Get Users</button>
     </div>
      </nav>

      {this.state.loading===true &&(
          <div class="loader-position">
          <div className="loader"></div>
      </div>
      )}
       {this.state.users!== [] && (
           <div className="row card-display ml-5 mr-5">
           {this.state.users.map((item,index)=>{
               return(
                   <div key={index} className="col-lg-4 mr-3 ml-3 mt-5 mb-5">
                   <Cards key={item} data={item}/>
                   </div>
               );
           })}
           </div>
       )}
  </div>
  );
  }
}
export default Main;