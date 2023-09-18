import styled from 'styled-components';


const StyleMessage = styled.div`
position: relative; 
height: 400px
display: inline-flex;
width: 80%;
margin-bottom: 40px;
`
const MessageText = styled.p`
background-color: rgb(5, 25, 56);
color: rgb(185, 189, 196);
border-radius: 10px;
padding: 7px
`

const Message = ({ message }) => { 

    return (
        <div>
            <div className={`col-md-6 col-lg-7 col-xl-8`}>
                <StyleMessage className='pe-3  data-mdb-perfect-scrollbar="true"' >
                    <div className="d-flex flex-row justify-content-start">
                        <div>
                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">Name</p>
                            <MessageText className="small ms-3 mb-1 rounded-3">
                                Text
                            </MessageText>
                        </div>
                    </div>
                </StyleMessage>
            </div>
        </div>
    )
}

export default Message;
