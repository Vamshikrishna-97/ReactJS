import React, { useDebugValue } from 'react'
class Hero extends React.Component{
hero ={
name :"Rajinikanth"
age  :75,
sal  :4500000
image :"data:image/jpeg;base64,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"

}
render(){
return <div className ="container mt-5">
<div>{JSON.sonStrinify(this.hero)}</div>
<div className="row">
<div className="col-md-5">
<div className="card">
<div className="card-header">
<img src={this.hero.image}/>
<div className="card-body">
<ul className="list-group-">
<li className="list-group-item">
{this.hero.name}
</li>
<li className="list-group-item">
 {this.hero.age}   
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
}
}
export default value