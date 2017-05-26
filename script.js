let react = document.getElementById("react")



class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      term: "",
      filtered: []

    }
    this.showResults = this.showResults.bind(this);
    // this.filterResults = this.filterResults.bind(this);
  }
    render() {
      let filtered = this.state.filtered.map(function(filters){
        return <div>{filters.brand} {filters.model} year: {filters.year} ${filters.price}</div>
      })
      return (
        <div>
            <div className = "search-bar">Search Brand<input type="search" onChange = {this.showResults} value={this.state.term} /> </div>
            <div>{filtered}</div>
        </div>
  )


    }

    showResults(event) {
      let searchTerm = event.target.value

      this.setState({term: searchTerm})
      // setTimeut(function(){
      //   searchTerm = this.state.term
      // },100)

      let results = cars.filter(function(car){

      return car.brand.indexOf(searchTerm) >-1 || car.model.indexOf(searchTerm)>-1 || car.year===searchTerm



      })
      this.setState({filtered: results})

    }
}


ReactDOM.render(
<Search />,react
)




let cars = [
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
