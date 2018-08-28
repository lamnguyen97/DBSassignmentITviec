import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import request from 'superagent';
const $ = window.jQuery;
class Review extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      review:"",
      rating: 1
    };
  }
  handleChange=(event)=>{
        
    var name = event.target.name;
    var value = event.target.value;

    this.setState({[name]: value});
    
     
  }
    handleSubmit= (e)=>{
    var id =this.props.params.id;
    var canid = localStorage.getItem('Candidateid');
    e.preventDefault();
    const {review, rating} = this.state;
   $.ajax({
      method: "POST",
      url: '/user/review/'+id,
      data: {
        review,
        rating,
        canid
      }
    }).done(response => {
  
     
        browserHistory.push('/');
      
     
    })
    
 
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  render() {
    console.log(this.state);
    return (
     <div className="Review container">
     <h2>Đánh giá
    Toshiba Software Development (Viet Nam) Co, Ltd </h2>
    <div className="Rating">
       <h2> Rating </h2>
       <StarRatingComponent 
                  name="rate2" 
                  starCount={5}
                  value={this.state.rating}
                  renderStarIcon={() => <span className="fa fa-star rating-big"></span>}
                  onStarClick={this.onStarClick.bind(this)}
                  editing={true}
        />
        <form action="" method="POST" role="form" onSubmit={(e) => this.handleSubmit(e)}>
          
        
          <div className="form-group">
            <h2>Đánh Giá</h2>
            <input type="text" name="review" className="form-control" id="" placeholder="Add review" onChange={(e)=>this.handleChange(e)}/>
          </div>
               
        
          <button type="submit" className="btn btn-primary">Đánh giá</button>
        </form>

    </div>
     </div>
         );
  }
}

export default Review;
