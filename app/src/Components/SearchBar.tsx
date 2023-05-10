import { StyledSearchBarContainer, StyledSearchBar } from "./styles/Main/SearchBar/StyledSearchBarContainer";
import Icon from "./FontawesomeIcon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {

    return (
        <StyledSearchBarContainer>
            <StyledSearchBar>
                <Icon path={faSearch}/>
                <input placeholder="Search Twitter"></input>
            </StyledSearchBar>
        </StyledSearchBarContainer>
    )
}


export default SearchBar