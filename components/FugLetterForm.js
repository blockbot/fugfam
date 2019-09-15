import styled from '@emotion/styled'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Div = styled.div`{
  margin-bottom: 22px;
}`
const url = "//gmail.us4.list-manage.com/subscribe/post?u=b4b87f3d6422072846316b2d8&amp;id=306e32f940";
const SimpleForm = () => <MailchimpSubscribe url={url} />

const FugLetterForm = () => (
  <Div>
    <MailchimpSubscribe url={url} />
  </Div>
)

export default FugLetterForm
