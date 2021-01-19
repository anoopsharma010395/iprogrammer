import React from 'react';
import axios from '../node_modules/axios';
import TableComponent from './TableComponent.js'

class ImageComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={imageData:"",propValue:[],monthValue:""}
    }
    handleCompareRemove(event){
        
        let selectedId = event.target.id.split("_")[0];
        let selectedBox = this.state.imageData[selectedId];
        
        this.setState({propValue:selectedBox});
    }
    componentDidMount(){
        this.fetchResponse();
    }
    async fetchResponse(){
        let response = await axios.get("https://jsonplaceholder.typicode.com/photos");
        //console.log(response.data);
        var result = response.data.slice(0,3).reduce(function(map, obj) {
            map[obj.key] = obj.val;
            return map;
        }, {});
        this.setState({imageData:response.data.slice(0,3)})
        console.log(this.state.imageData);
    }

    render(){
        let listOfGrids="";
        if(this.state.imageData){
             listOfGrids = this.state.imageData.map((item, index) => {
                return (
                    <div key={index} className="boxes">
                        <div><img className="image-div" src={item.url} alt="image"/></div>
                        <div>Title: {item.title}</div>
                        <div>ID: {item.id}</div>
                        <div>URL: {item.url.toString()}</div>
                        <div>
                            <button id={index + "_compare"} className="compare" $index={index} onClick={(event) => this.handleCompareRemove(event)}>Compare</button> 
                            <button id={index + "_remove"}  className="remove"   $index={index} onClick={(event) => this.handleCompareRemove(event)}>Compare</button> 
                        </div>
                    </div>
                )
              });
        }
        return(
            <div><div id='enclosingDiv' className="grid-3boxes" >
            {listOfGrids}
        </div>
        <TableComponent/></div>
        
    )
}
}
export default ImageComponent;