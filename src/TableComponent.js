import React from 'react';


class TableComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { imageData: "", yearValue: "", monthValue: "" }
    }


    render() {
        return (
            <div  >
                <table>
                    <tr>
                        Company
                    </tr>
                    <tr>
                        <th>Photo</th>
                        <th>Id</th>
                        <th>URL</th>
                        <th>Title</th>
                    </tr>
                    
                </table>
            </div>

        )
    }
}
export default TableComponent;