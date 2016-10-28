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
        <nav class="main-nav">
        <div>
        <a href="#" class="brand-logo center">Pontex</a>        
            <div class="nav-wrapper">            
                <ul class="right">
                    <li><a class="dropdown-button" data-beloworigin="true" href="#!" data-activates="dropdown-options-menu"><i class="material-icons">more_vert</i></a></li>
                </ul>
            </div>                            
        </div>
        </nav>
        `
    }
}

export default NavView;