import React from 'react'
import { Card ,Button} from 'react-bootstrap'

const Profile = ({name,img,handleName}) => {
  return (
    <div>  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name} </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary" onClick={()=>handleName({name})} >Go somewhere</Button>
    </Card.Body>
  </Card></div>
  )
}

Profile.defaultProps={
  name:"anonym",
 img: "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
}

export default Profile