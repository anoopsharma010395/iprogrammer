import React from 'react';


class TableComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        let listOfGrids="";
        if(this.props.propValue){
             listOfGrids = Array.from(this.props.propValue.values()).map((item, index) => {
                return (
                    <tr>
                        <td>Photo {index +1}</td>
                        <td>{item.id}</td>
                        <td><img className="image-div table" src={item.thumbnailUrl} alt="image"/></td>
                        <td>{item.title}</td>
                    </tr>
                )
              });
        }

        return (
            <div  className="border-1px table-div">
                <div class="font-bold">Company</div>
                <table>
                    
                    <tr>
                        <th>Photo</th>
                        <th>Id</th>
                        <th>URL</th>
                        <th>Title</th>
                    </tr>
                    {listOfGrids}
                </table>
            </div>

        )
    }
}
export default TableComponent;