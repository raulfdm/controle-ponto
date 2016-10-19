import View from './View';

class NavView extends View {

    constructor(elemento) {

        super(elemento);
        
    }        

    template(model) {        
        return `               
        <ul id="dropdown-options-menu" class="dropdown-content">
            <li><a onclick="firebase.auth().signOut()" id="btn-logout" href="#!">Log Out</a></li>
        </ul>
        <nav class="light-blue darken-4">        
            <div class="nav-wrapper">
                <ul class="right">
                    <li class="email-usuario"></li>
                    <li><a class="dropdown-button" data-beloworigin="true" href="#!" data-activates="dropdown-options-menu"><i class="material-icons">more_vert</i></a></li>
                </ul>
            </div>
        </nav>
        `
    }
}

export default NavView;