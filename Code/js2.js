var openedWindow;let left_door = false;let right_door = false;let left_light = false;let right_light = false;let desk_fan = false;let power = 100;let power_usage = 1;let hour = 12;let clicked = false;let mute_button = document.getElementById("muteCall");let among = false;let camera = false;let tablet = false;let cam_1A = true;let cam_1B = false;let cam_1C = false;let cam_2A = false;let cam_2B = false;let cam_3 = false;let cam_4A = false;let cam_4B = false;let cam_5 = false;let cam_6 = false;let cam_7 = false;audio = new Audio("../Office/boop.wav");turn_on = new Audio("../Office/Fan/turn_on.wav");turn_off = new Audio("../Office/Fan/turn_off.wav");buzzing = new Audio("../Office/Fan/buzzing.wav");door_light = new Audio("../Office/light_hum.wav");door_light2 = new Audio("../Office/light_hum.wav");camera_move = new Audio("../Office/Cameras/camera_move.wav");night_1_call = new Audio("../Office/voiceover1c.wav");stinger = new Audio("../FNaF 1 Audio/windowscare.wav");music_box_01 = new Audio("../Office/Cameras/music_box_01.mp3");music_box_02 = new Audio("../Office/Cameras/music_box_02.mp3");music_box_03 = new Audio("../Office/Cameras/music_box_03.mp3");music_box_04 = new Audio("../Office/Cameras/music_box_04.mp3");camera_open = new Audio("../Office/Cameras/camera_open.wav");camera_close = new Audio("../Office/Cameras/camera_close.wav");ad_music = new Audio("../Office/Cameras/ad_music.mp3");garble01 = new Audio("../Office/Cameras/garble1.wav");garble012 = new Audio("../Office/Cameras/garble1-2.wav");gf_laugh = new Audio("../Golden Freddy/gf_laugh.wav");gf_jumpscare = new Audio("../Golden Freddy/gf_jumpscare.wav");gf_talking = new Audio("../Golden Freddy/gf_talking.wav");buzzing.loop = true;door_light.loop = true;door_light2.loop = true;camera_move.loop = true;ad_music.loop = true;gf_talking.loop = true;setInterval(() => {    if (hour == 12)    {        hour = 1;        document.getElementById("hour").innerHTML = `${hour} AM`;        document.getElementById("hour").style.marginLeft = "54px";    }    else if (hour >= 0)    {        hour++;        document.getElementById("hour").innerHTML = `${hour} AM`;        document.getElementById("hour").style.marginLeft = "54px";    }}, 90000);setInterval(function (){if (power_usage == 1)        {            power = power - 1;            if (tablet)            {                garble01.play();            }            else            {                garble012.play();            }            let static = 100;            document.getElementById("static2").className = "static";            let inter = setInterval(                function ()                 {                    document.getElementById("static2").style.opacity = `${static}%`;                    static--;                                    }, 10);                            setTimeout(() => {                    clearInterval(inter);                }, 950);            document.getElementById("power").innerHTML = `Power left: ${power}%`;        }        else if (power_usage == 2)        {            power = power - 2;            if (tablet)            {                garble01.play();            }            else            {                garble012.play();            }            let static = 100;            document.getElementById("static2").className = "static";            let inter = setInterval(                function ()                 {                    document.getElementById("static2").style.opacity = `${static}%`;                    static--;                                    }, 10);                            setTimeout(() => {                    clearInterval(inter);                }, 950);            document.getElementById("power").innerHTML = `Power left: ${power}%`;        }else if (power_usage == 3)        {            power = power - 3;            if (tablet)            {                garble01.play();            }            else            {                garble012.play();            }            let static = 100;            document.getElementById("static2").className = "static";            let inter = setInterval(                function ()                 {                    document.getElementById("static2").style.opacity = `${static}%`  ;                  static--;                                    }, 10);                            setTimeout(() => {                    clearInterval(inter);                }, 950);            document.getElementById("power").innerHTML = `Power left: ${power}%`;        }else if (power_usage == 4)
        {
            power = power - 4;            if (tablet)            {                garble01.play();            }            else            {                garble012.play();            }            let static = 100;            document.getElementById("static2").className = "static";            let inter = setInterval(                function ()                 {                    document.getElementById("static2").style.opacity = `${static}%`;                    static--;                                    }, 10);                            setTimeout(() => {                    clearInterval(inter);                }, 950);            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 5)
        {
            power = power - 5;
            if (tablet)
            {
                garble01.play();
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 6)
        {
            power = power - 6;
            if (tablet)
            {
                garble01.play();
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 7)
        {
            power = power - 7;
            if (tablet)
            {
                garble01.play();
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 8)
        {
            power = power - 8;
            if (tablet)
            {
                garble01.play();
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 9)
        {
            power = power - 9;
            if (tablet)
            {
                garble01.play();
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
        else if (power_usage == 10)
        {
            power = power - 10;
            if (tablet)
            {
                garble01.play();
            }
            else
            {
                garble012.play();
            }

            let static = 100;
            document.getElementById("static2").className = "static";
            let inter = setInterval(
                function () 
                {
                    document.getElementById("static2").style.opacity = `${static}%`;
                    static--;
                    
                }, 10);
            
                setTimeout(() => {
                    clearInterval(inter);
                }, 950);
            document.getElementById("power").innerHTML = `Power left: ${power}%`;
        }
    }, 9000);
if (power == 0)
{
    document.getElementById("power").className = "hidden";
    document.getElementById("usage").className = "hidden";
    document.getElementById("doorButtonL").className = "hidden";
    document.getElementById("doorButtonR").className = "hidden";
    document.getElementById("doorR").className = "hidden";
    document.getElementById("doorL").className = "hidden";
}

let phoneCall = () =>
{
    clicked = true;

    if (clicked)
    {
        setTimeout(() => {
            night_1_call.play();
        }, 1500);

        setTimeout(() => {
            mute_button.className = "muteCall";
        }, 15000);
    };
};

let muteCall = () =>
{
    night_1_call.volume = 0;
    clicked = false;
    mute_button.remove();
    night_1_call.pause();
    document.body.onclick = emptyFunction();
};

let cameraToggle = () =>
{
    if (!camera)
    {
        document.getElementById("cameraToggle").style.opacity = "100%";
        document.getElementById("cameraToggle").src = "../Office/Cameras/button_selected.png";

        document.getElementById("officeRight").style.filter = "blur(8px)";
        document.getElementById("officeLeft").style.filter = "blur(8px)";
        document.getElementById("doorButtonL").style.filter = "blur(8px)";
        document.getElementById("lightButtonL").style.filter = "blur(8px)";
        document.getElementById("doorButtonR").style.filter = "blur(8px)";
        document.getElementById("lightButtonR").style.filter = "blur(8px)";
        document.getElementById("doorL").style.filter = "blur(8px)";
        document.getElementById("doorR").style.filter = "blur(8px)";

        let static = 100;
        camera_move.play();
        document.getElementById("line").className = "line";
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage + 1}`;
        document.getElementById("cameras").className = "cameras";
        document.getElementById("map").className = "map";
        document.getElementById("camName").className = "camName";
        document.getElementById("cam1A").className = "cam1A";
        document.getElementById("cam1B").className = "cam1B";
        document.getElementById("cam1C").className = "cam1C";
        document.getElementById("cam2A").className = "cam2A";
        document.getElementById("cam2B").className = "cam2B";
        document.getElementById("cam3").className = "cam3";
        document.getElementById("cam4A").className = "cam4A";
        document.getElementById("cam4B").className = "cam4B";
        document.getElementById("cam5").className = "cam5";
        document.getElementById("cam6").className = "cam6";
        document.getElementById("cam7").className = "cam7";
        document.getElementById("static").className = "static";
        camera_open.play();
        camera = true;
        let inter = setInterval(
            function () 
            {
                document.getElementById("static").style.opacity = `${static}%`;
                static--;
            }, 10);
        
            setTimeout(() => {
                clearInterval(inter);
            }, 800);
    }
    else if (camera)
    {
        document.getElementById("cameraToggle").style.opacity = "50%";
        document.getElementById("cameraToggle").src = "../Office/Cameras/button.png";

        document.getElementById("officeRight").style.filter = "none";
        document.getElementById("officeLeft").style.filter = "none";
        document.getElementById("doorButtonL").style.filter = "none";
        document.getElementById("lightButtonL").style.filter = "none";
        document.getElementById("doorButtonR").style.filter = "none";
        document.getElementById("lightButtonR").style.filter = "none";
        document.getElementById("doorL").style.filter = "none";
        document.getElementById("doorR").style.filter = "none";

        camera_move.pause();
        document.getElementById("line").className = "hidden";
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage - 1 + 1}`;
        document.getElementById("cameras").className = "hidden";
        document.getElementById("static").className = "hidden";
        document.getElementById("map").className = "hidden";
        document.getElementById("camName").className = "hidden";
        document.getElementById("cam1A").className = "hidden";
        document.getElementById("cam1B").className = "hidden";
        document.getElementById("cam1C").className = "hidden";
        document.getElementById("cam2A").className = "hidden";
        document.getElementById("cam2B").className = "hidden";
        document.getElementById("cam3").className = "hidden";
        document.getElementById("cam4A").className = "hidden";
        document.getElementById("cam4B").className = "hidden";
        document.getElementById("cam5").className = "hidden";
        document.getElementById("cam6").className = "hidden";
        document.getElementById("cam7").className = "hidden";
        camera_close.play();
        camera_open.pause();
        camera_open.load();
        camera = false;
    }
};

let leftDoorFunction = () =>
{
    door_sound = new Audio("../Office/door_close.wav");
    if (!left_door)
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage + 1}`;
        power_usage += 1
        left_door = true;
        document.getElementById("doorL").src = "../Office/left_door_close.gif";
        document.getElementById("doorButtonL").src = "../Office/doors/left_door/door_on.png";
        document.getElementById("doorL").className = "doorL";
        door_sound.play();
        setTimeout(
        function()
        {
            document.getElementById("doorL").src = "../Office/doors/left_door/closed.png";
        }, 500);
    }
    else if (left_door)
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage - 1}`;
        power_usage = power_usage - 1;
        door_sound.play();
        left_door = false;
        document.getElementById("doorL").src = "../Office/left_door_open.gif";
        document.getElementById("doorButtonL").src = "../Office/doors/left_door/door_off.png";
        setTimeout(
        function()
        {
            document.getElementById("doorL").src = "doorR.png";
            document.getElementById("doorL").className = "hidden";
        }, 500);
    }
};

let rightDoorFunction = () =>
{
    door_sound = new Audio("../Office/door_close.wav");
    if (!right_door)
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage + 1}`;
        power_usage += 1;
        right_door = true;
        document.getElementById("doorR").src = "../Office/right_door_close.gif";
        document.getElementById("doorButtonR").src = "../Office/doors/right_door/door_on.png";
        document.getElementById("doorR").className = "doorR";
        door_sound.play();
        setTimeout(
        function()
        {
            document.getElementById("doorR").src = "../Office/doors/right_door/closed.png";
        }, 500);
    }
    else if (right_door)
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage - 1}`;
        power_usage = power_usage - 1;
        door_sound.play();
        right_door = false;
        document.getElementById("doorR").src = "../Office/right_door_open.gif";
        document.getElementById("doorButtonR").src = "../Office/doors/right_door/door_off.png";
        setTimeout(
        function()
        {
            document.getElementById("doorR").src = "doorR.png";
            document.getElementById("doorR").className = "hidden";
        }, 500);
    }
};

let leftLightFunction = () =>
{
    if (!left_light) 
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage + 1}`;
        power_usage += 1;
        left_light = true;
        door_light2.play();
        document.getElementById("lightButtonL").src = "../Office/doors/left_door/light_on.png";
        document.getElementById("officeLeft").src = "../Office/left_light.png";
    }
    else if (left_light)
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage - 1}`;
        power_usage = power_usage - 1;
        door_light2.pause();
        left_light = false;
        document.getElementById("lightButtonL").src = "../Office/doors/left_door/light_off.png";
        document.getElementById("officeLeft").src = "../Office/left_normal.png";
    }
};

let rightLightFunction = () =>
{
    if (!right_light)
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage + 1}`;
        power_usage += 1;
        right_light = true;
        door_light.play();
        document.getElementById("lightButtonR").src = "../Office/doors/right_door/light_on.png";
        document.getElementById("officeRight").src = "../Office/right_light.png";
    }
    else if (right_light)
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage - 1}`;
        power_usage = power_usage - 1;
        door_light.pause();
        right_light = false;
        document.getElementById("lightButtonR").src = "../Office/doors/right_door/light_off.png";
        document.getElementById("officeRight").src = "../Office/right_normal.png";
    }
};

let freddyNoseSound = () =>
{
    audio.play();
    console.log("Boop!");
};

let fanToggle = () =>
{
    if (desk_fan)
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage - 1}`;
        power_usage = power_usage - 1;
        document.getElementById("fan").src = "../Office/Fan/1.png";
        desk_fan = false;
        turn_off.play();
        buzzing.pause();
        document.getElementById("heat").innerHTML = ">20∘";
    }
    else
    {
        document.getElementById("usage").innerHTML = `Power usage: x${power_usage + 1}`;
        power_usage += 1;
        document.getElementById("fan").src = "../Office/fan_spin.gif";
        desk_fan = true;
        turn_on.play();
        buzzing.play(); 
        document.getElementById("heat").innerHTML = "20∘";
    }
};

let backgroundChange = () =>
{
    document.body.background = "../Gui/background_hover.png";
};

let backgroundChangeBack = () =>
{
    document.body.background = "../Gui/background.png";
};

let cam1A = () =>
{
    document.getElementById("disabled").className = "hidden";
    let random = Math.floor(Math.random(1, 25) * 25);

    document.getElementById("camName").innerHTML = "Show Stage";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);

    if (random == 1)
    {
    console.warn("It's me.");
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/1A_stage/19-2.png')";
    
    setTimeout(() => {
        stinger.play();
    }, 500)
    }
    else 
    {
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/1A_stage/19.png')";
    }
};

let cam1B = () =>
{
    document.getElementById("disabled").className = "hidden";
    document.getElementById("camName").innerHTML = "Dinning Room";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static"

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/1B_dinning/48.png')";
};

let cam1C = () =>
{
    document.getElementById("disabled").className = "hidden";
    document.getElementById("camName").innerHTML = "Pirate's Cove";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/1C_cove/66.png')";
};

let cam2A = () =>
{
    document.getElementById("disabled").className = "hidden";
    document.getElementById("camName").innerHTML = "Left Corridor";
    
    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/2A_left_corridor/44.png')";
};

let cam2B = () =>
{
    document.getElementById("disabled").className = "hidden";
    document.getElementById("camName").innerHTML = "Left Cubby";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/2B_left_back/571.png')";
};

let cam4A = () =>
{
    document.getElementById("disabled").className = "hidden";
    document.getElementById("camName").innerHTML = "Right Corridor";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/4A_right_corridor/67.png')";
};

let cam4B = () =>
{
document.getElementById("disabled").className = "hidden";
    document.getElementById("camName").innerHTML = "Right Cubby";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/4B_right_back/49.png')";
};

let cam3 = () =>
{
    document.getElementById("disabled").className = "hidden";
    document.getElementById("camName").innerHTML = "Closet";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/3_closet/62.png')";
};

let cam5 = () =>
{
    document.getElementById("disabled").className = "hidden";
    document.getElementById("camName").innerHTML = "Parts and Service";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/5_service/83.png')";
};

let cam6 = () =>
{
    document.getElementById("camName").innerHTML = "Kitchen";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();

    document.getElementById("static").className = "static";
    document.getElementById("disabled").className = "disabled";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/6_kitchen/camera.png')";
};

let cam7 = () =>
{
    document.getElementById("disabled").className = "hidden";
    document.getElementById("camName").innerHTML = "Restroom";

    let static = 100;

    camera_switch = new Audio("../Office/Cameras/camera_switch.wav");
    camera_switch.play();
    document.getElementById("static").className = "static";

    let inter = setInterval(
    function () 
    {
        document.getElementById("static").style.opacity = `${static}%`;
        static--;
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 800);
    document.getElementById("cameras").style.backgroundImage = "url('../Office/Cameras/view/7_toilet/41.png')";
};

function emptyFunction()
{

};

let tabletToggle = () =>
{
    camera_open_tablet = new Audio("../Office/Cameras/camera_close.wav");
    tablet_on = new Audio("../Office/Cameras/tablet_on.wav");
    if (!tablet)
    {

        ad_music.play();
        document.getElementById("tabletToggle").style.opacity = "100%";
        document.getElementById("tabletToggle").style.top = "90px";
        document.getElementById("tabletToggle").style.marginLeft = "1525px";
        document.getElementById("tabletToggle").src = "../Office/Cameras/button_info_selected.png";
        
        document.getElementById("tablet").className = "tablet";
        document.getElementById("power").className = "power";
        document.getElementById("usage").className = "usage";
        document.getElementById("heat").className = "heat";
        document.getElementById("hour").className = "hour";
        document.getElementById("night").className = "night";
        document.getElementById("muteCall").className = "muteCall";

        let static = 100;
        document.getElementById("static2").className = "static";
        camera_open_tablet.play();
        tablet = true;
        let inter = setInterval(
            function () 
            {
                document.getElementById("static2").style.opacity = `${static}%`;
                static--;
                
            }, 10);
        
            setTimeout(() => {
                clearInterval(inter);
            }, 950);

            setTimeout(() => {
                tablet_on.play();
            }, 100);
    }
    else if (tablet)
    {

        ad_music.pause();
        ad_music.load();
        document.getElementById("tabletToggle").style.opacity = "50%";
        document.getElementById("tabletToggle").style.top = "490px";
        document.getElementById("tabletToggle").style.marginLeft = "1530px";
        document.getElementById("tabletToggle").src = "../Office/Cameras/button_info.png";

        document.getElementById("tablet").className = "hidden";
        document.getElementById("power").className = "hidden";
        document.getElementById("usage").className = "hidden";
        document.getElementById("heat").className = "hidden";
        document.getElementById("hour").className = "hidden";
        document.getElementById("night").className = "hidden";
        document.getElementById("muteCall").className = "hidden";
        
        camera_open_tablet.play();
        tablet = false;
    }
};

/*

let spawn = Math.floor(Math.random(/*10000, 60000100*//*1, 1500) * 60000);

    setTimeout(() => {

        gf_laugh.play();

        setTimeout(() => {
            document.getElementById("GoldenFreddy").className = "GoldenFreddy";
            gf_talking.play();
            left_door = false;
            left_light = true;
            leftLightFunction();
            right_door = false;
            right_light = true;
            rightLightFunction();
            desk_fan = true;
            fanToggle();
            leftDoorFunction();
            leftLightFunction();
            rightDoorFunction();
            rightLightFunction();
            fanToggle();

        }, 1500);

            if (among)
            {
                document.getElementById("GoldenFreddy").className = "hidden";
                gf_talking.pause();
                gf_talking.load();
            }
            else
            {
                setTimeout(() => {
                    gFreddyJumpscare();  
                }, 5000);
            }

    }, 1000);

let gFreddyJumpscare = () =>
{
    gf_jumpscare.play();
    left_door = true;
    left_light = true;
    right_door = true;
    right_light = true;
    desk_fan = true;
    camera = true;
    tablet = true;
    leftDoorFunction();
    leftLightFunction();
    rightDoorFunction();
    rightLightFunction();
    fanToggle();
    cameraToggle();
    tabletToggle();
    document.getElementById("jumpscare").src = "../Golden Freddy/gf_jumpscare.png";
    document.getElementById("jumpscare").className = "jumpscare";
    setTimeout(() => {
        window.location.href = "https://www.youtube.com/watch?v=grd-K33tOSM";
    }, 3500);
};
*/