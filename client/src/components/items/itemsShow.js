import React from 'react' 
import Card from 'react-bootstrap/Card'
import image1 from '../../media/imageHeader/image1.jpg'
import image2 from '../../media/imageHeader/image2.jpg'
import image3 from '../../media/imageHeader/image3.jpg'
import image4 from '../../media/imageHeader/image4.jpg'
import image5 from '../../media/imageHeader/image5.jpg'
import ItemSlides from './itemSlides'
class  AllItemsShow extends React.Component {

 
    render() {
        return( 
            <div>
                <ItemSlides/> 
                
                <div className ='container-fluid mt-3'>
                    <h3> Mobiles </h3>
                    <div className ='row'>
                        <div className = 'col-md-4'>
                            <Card  >
                            <Card.Img variant="top" src= {`${image1}`} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <button variant="primary">Go somewhere</button>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className = 'col-md-4'>
                            <Card  >
                            <Card.Img variant="top" src= {`${image2}`} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <button variant="primary">Go somewhere</button>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className = 'col-md-4'>
                            <Card  >
                            <Card.Img variant="top" src= {`${image3}`} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <button variant="primary">Go somewhere</button>
                            </Card.Body>
                            </Card>
                        </div>
                        
                    </div>

                    <h3> Home Decors </h3>
                    <div className ='row'>
                        <div className = 'col-md-4'>
                            <Card  >
                            <Card.Img variant="top" src= {`${image1}`} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <button variant="primary">Go somewhere</button>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className = 'col-md-4'>
                            <Card  >
                            <Card.Img variant="top" src= {`${image2}`} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <button variant="primary">Go somewhere</button>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className = 'col-md-4'>
                            <Card  >
                            <Card.Img variant="top" src= {`${image3}`} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <button variant="primary">Go somewhere</button>
                            </Card.Body>
                            </Card>
                        </div>
                        
                    </div>

                
                </div>
           
            </div>
               
        )
    }
}

export default AllItemsShow