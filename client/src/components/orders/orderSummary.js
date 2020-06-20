import React from 'react'

class OrderSummary extends React.Component {

    // componentDidMount = ()=>{
    //     this.props.dispatch(startGetUser()) 
    //     const refersh =  setInterval( () =>{  
    //         if(this.props.users.length ) {             
    //             clearInterval(refersh)
                 
    //         }
    //     },1000)
    // }

    render() {
        return(
            <div className ='container'>
                <table className="table table-striped table-dark table-bordered ">
                    <thead className ='bg-success'>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default OrderSummary