let react = document.getElementById("react")



class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      brand: = "",
      model: = "",
      year: = ""

    }
  }
    render() {
      return(
      <div>
        <input type="search" onChange = {this.showResults}
      </div>


    )
    }

    showResults () {
      
    }
}


ReactDOM.render(){

}


let car = [
{
    brand: "Honda",
    model: "Civic",
    year: 1997,
    price: 5300
},
{
    brand: "Buick",
    model: "Century",
    year: 1982,
    price: 1800
},
{
    brand: "Honda",
    model: "Accord",
    year: 2010,
    price: 11300
},
{
    brand: "Buick",
    model: "Park Avenue",
    year: 1990,
    price: 2000
}
]
