import { TextContainer } from "./styles/Main/Tweet/TextContainer"
import { FunctionComponent, useState } from "react"






const TweetTextArea = () => {

   



    return (
        <TextContainer>
            <textarea
                placeholder="What's happening?"
                maxLength={100}
            />
        </TextContainer>
    )
}

export default TweetTextArea