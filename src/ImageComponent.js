import React from 'react';
import axios from '../node_modules/axios';
import TableComponent from './TableComponent.js'

class ImageComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={imageData:"",propValue:new Map,monthValue:""}
    }
    handleCompareRemove(event){
        
        let selectedId = event.target.id.split("_")[0];
        let newProp=this.state.propValue;
        if(this.state.propValue.get(selectedId))
        {
            newProp.delete(selectedId);
            document.getElementById(event.target.id).innerHTML = "Compare";
        }
        else{
            newProp.set(selectedId,this.state.imageData[selectedId])
            document.getElementById(event.target.id).innerHTML = "Remove";
        }
        this.setState({propValue:newProp});
    }
    componentDidMount(){
        this.fetchResponse();
    }
    async fetchResponse(){
        let response = await axios.get("https://jsonplaceholder.typicode.com/photos");
        //console.log(response.data);
        var result = response.data.slice(0,3).reduce(function(map, obj) {
            map[obj.id] = obj;
            return map;
        }, {});
        this.setState({imageData:result});
        console.log(this.state.imageData);
    }

    render(){
        let listOfGrids="";
        if(this.state.imageData){
             listOfGrids = Object.values(this.state.imageData).map((item, index) => {
                return (
                    <div key={index} className="boxes">
                        <div><img className="image-div" src={item.url} alt="image"/></div>
                        <div>Title: {item.title}</div>
                        <div>ID: {item.id}</div>
                        <div>URL: {item.url.toString()}</div>
                        <div>
                            <button id={item.id + "_compare"} className="compare" $index={index} onClick={(event) => this.handleCompareRemove(event)}>Compare</button> 
                        </div>
                    </div>
                )
              });
        }
        return(
            <div><div id='enclosingDiv' className="grid-3boxes" >
            {listOfGrids}
        </div>
        <TableComponent propValue={this.state.propValue}/></div>
        
    )
}
}
export default ImageComponent;