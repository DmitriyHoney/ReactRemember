import Navbar from "./Navbar";

const {connect} = require("react-redux");

const mapStateToProps = (state) => ({
    sidebarPage: state.sidebarPage
});

const mapDispatchToProps = (dispatch) => ({ });


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;