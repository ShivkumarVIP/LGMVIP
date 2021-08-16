import React,{Component} from 'react';
import "./Card.css";
class Cards extends Component{
    state={
        
    };

    render(){
        return(
            <div>
            <div class="card">
            <div class="image-position">
            <img className="image" src={this.props.data.avatar}></img>
           </div>
            <div className="card-body">
            <div class="position">
            <h4>
            {this.props.data.first_name}{this.props.data.last_name}
            </h4>{" "}
            </div>
            <h6 class="mt-2 ml-5">Id:{this.props.data.id}</h6>
            <h6 class="mt-2 ml-5">Email:{this.props.data.email}</h6>
            </div>
            </div>
            </div>
        );
    }
}
export default Cards;