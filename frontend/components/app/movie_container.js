import { connect } from "react-redux";
import Movie from "./movie";
import { addMovieToList, removeMovieFromList } from "../../actions/list_actions";
import { getUserProfiles, setActiveProfile } from "../../actions/profile_actions";

const msp = state => ({
        activeProfile: state.entities.activeProfile.profile,
        activeProfileId: state.entities.activeProfile.profile.id,
        activeProfileList: state.entities.activeProfile.profile.list,
        currentUserId: state.session.id,
        userProfiles: state.entities.profiles,
        profileList: state.entities.list
})

const mdp = dispatch => ({
    addMovieToList: listItemInfo => dispatch(addMovieToList(listItemInfo)),
    removeMovieFromList: listItemId => dispatch(removeMovieFromList(listItemId)),
    refreshUserProfiles: userId => dispatch(getUserProfiles(userId)),
    setActiveProfile: profile => dispatch(setActiveProfile(profile))
})

export default connect(msp, mdp)(Movie);