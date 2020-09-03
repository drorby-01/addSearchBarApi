import React,{Component} from "react"
import InputGroupWithExtras from "react-bootstrap/esm/InputGroup"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/InputGroup"

interface IProp{
    filterMovie:Function
}

interface IState{
    title:string
}

export default class ServerFilter extends Component<IProp,IState>{

    constructor(props:IProp){
        super(props)
        this.state = {title:""}
    }

    async updateState(e:any){
        await this.setState({title:e.target.value})
        
    }

    shouldComponentUpdate(props: any, nextState: any) {
        // const newColorWithoutSpaces = nextState.color.replace(/ /g, "");

        if (nextState.title === this.state.title) return false;
        return true;
    }

    
    render(){
        return<div className="row mt-1 ml-1">
            <h4 className="mr-3">SearchMovie:</h4>
            <input type="text" className="form-control col-lg-3"
            onChange={e=>this.updateState(e)}
            value={this.state.title}
            placeholder={"Enter Movie Name"}
            ></input>
            <button onClick={()=>this.props.filterMovie(this.state.title)} className="btn btn-primary">search Movie</button>
        </div>
    }


}