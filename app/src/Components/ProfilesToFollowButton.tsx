import { FunctionComponent, useContext } from "react";
import Avatar from "./Avatar";
import ProfileName from "./ProfileName";
import ProfileNickName from "./ProfileNickname";
import { StyledTextContainer } from "./styles/ProfileButton/StyledTextContainer";
import { StyledContainerProfile } from "./styles/ProfileButton/StyledContainerProfile"; 
import FollowButton from "./FollowButton";
import { ProfileContainer } from "./styles/Main/Trending/StyledFollowButton";
import AppContext from "./AppContext";



const ProfilesToFollowButton = () => {


    const {users} = useContext(AppContext);
    console.log("🚀 ~ file: ProfilesToFollowButton.tsx:17 ~ ProfilesToFollowButton ~ users:", users)

    return (
        <>
          {users.map((user) => (
            <ProfileContainer key={user.id}>
              <Avatar someUrl={user.image} />
              <StyledContainerProfile>
                <StyledTextContainer>
                  <ProfileName name={user.name} />
                  <ProfileNickName nickname={user.userName} />
                </StyledTextContainer>
                {/* <FollowButton /> */}
              </StyledContainerProfile>
            </ProfileContainer>
          ))}
        </>
      );
    };

export default ProfilesToFollowButton