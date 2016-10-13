var u_up = false;
	up = false,
	u_left = false;
    left = false,
	u_down = false,
    down = false,
	u_right = false,
    right = false,
	u_action = false,
	action = false;
	
document.onkeyup = secundario;
function secundario (event) {
    switch (event.keyCode) {
        case leftKey:
            left = false;
			u_left = false;
            break;
        case upKey:
            up = false;
			u_up = false;
            break;
        case rightKey:
            right = false;
			u_right = false;
            break;
        case downKey:
            down = false;
			u_down = false;
            break;
		case actionKey:
			action = false;
			u_action = false;
			break;
    }
};

document.onkeydown = principal;


function principal(event) {
    switch (event.keyCode) {
        case leftKey:
            left = true;
            break;
        case upKey:
            up = true;
            break;
        case rightKey:
            right = true;
            break;
        case downKey:
            down = true;
            break;
		case actionKey:
			action = true;
			break;
    }
};