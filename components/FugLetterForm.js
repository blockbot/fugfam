import styled from '@emotion/styled'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Div = styled.div`{
  margin-bottom: 22px;
  left: 43px;
  position: absolute;
  top: 68px;

  input, button{
    background: #894d07;
    border: 1px solid #8dc63f;
    color: white;
    font-weight: bold;
    padding: 5px;
  }

  button {
    margin-left: 5px;
  }
}`
const url = "//gmail.us4.list-manage.com/subscribe/post?u=b4b87f3d6422072846316b2d8&amp;id=306e32f940";
const SimpleForm = () => <MailchimpSubscribe url={url} />

const FugLetterForm = () => (
  <Div>
    <MailchimpSubscribe url={url} />
  </Div>
)

export default FugLetterForm
