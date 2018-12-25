$(document).ready(function() {
    $('#logIn').click(function () {
        document.getElementById('logIn').style.display = "none";
        document.getElementById('logOut').style.display = "block";
    });
    $('#logOut').click(function () {
        document.getElementById('logIn').style.display = "block";
        document.getElementById('logOut').style.display = "none";
    });

    $("#productionTabs div").idTabs("#robot").idTabs("robotNew");

    addRobotProduction();
    addScrtchProgrammingProduction();
    add3DPrintProduction();
});

function removeSelectClass() {
    $("#selectRobotGood").removeClass("selected");
    $("#selectRobotHot").removeClass("selected");
    $("#selectRobotNew").removeClass("selected");
    $("#select3DPintGood").removeClass("selected");
    $("#select3DPrintHot").removeClass("selected");
    $("#select3DPrintNew").removeClass("selected");
    $("#selectScrtchProgrammingNew").removeClass("selected");
    $("#selectScrtchProgrammingGood").removeClass("selected");
    $("#selectScrtchProgrammingHot").removeClass("selected");
}

function selectRobot() {
    removeSelectClass();
    $("#robotNew").addClass("selected");
    $("#robot").idTabs("robotNew");
}

function select3DPrint() {
    removeSelectClass();
    $("#3DPrintNew").addClass("selected");
    $("#3DPrint").idTabs("3DPrintNew");
}

function selectScrtchProgramming() {
    removeSelectClass();
    $("#scrtchProgrammingNew").addClass("selected");
    $("#scrtchProgramming").idTabs("scrtchProgrammingNew");
}


function addRobotProduction() {

    //添加机器人的最近发布
    let goodFirst = new Array();
    let message = {productionImage: '../../../resources/img搜索框/production.jpg', productionName:'上班摸鱼小游戏', productionOwner: '陈鑫', disscussNum:'123456', thumbUpNum:'654321',
    disscussIco:'../../../resources/ico/discuss.png', thumbUpIco:'../../../resources/ico/thumbsUp.png'};
    for(let i = 0; i < 7; ++i){
        goodFirst.push(message);
    }
    addProductionMessage(goodFirst, '#robotNew');


    //添加机器人的最热评论
    let hotDisscuss = new Array();
    for(let i = 0; i < 9; ++i){
        hotDisscuss.push(message);
    }
    addProductionMessage(hotDisscuss, '#robotHot');

    //添加机器人的点赞优先
    let thumbUpFirst = new Array();
    for(let i = 0; i < 12; ++i){
        thumbUpFirst.push(message);
    }
    addProductionMessage(thumbUpFirst, '#robotGood');

}


function add3DPrintProduction() {

    //添加机器人的最近发布
    let goodFirst = new Array();
    let message = {productionImage: '../../../resources/img搜索框/production.jpg', productionName:'上班摸鱼小游戏', productionOwner: '陈鑫', disscussNum:'123456', thumbUpNum:'654321',
        disscussIco:'../../../resources/ico/discuss.png', thumbUpIco:'../../../resources/ico/thumbsUp.png'};
    for(let i = 0; i < 8; ++i){
        goodFirst.push(message);
    }
    addProductionMessage(goodFirst, '#3DPrintNew');


    //添加机器人的最热评论
    let hotDisscuss = new Array();
    for(let i = 0; i < 13; ++i){
        hotDisscuss.push(message);
    }
    addProductionMessage(hotDisscuss, '#3DPrintHot');

    //添加机器人的点赞优先
    let thumbUpFirst = new Array();
    for(let i = 0; i < 7; ++i){
        thumbUpFirst.push(message);
    }
    addProductionMessage(thumbUpFirst, '#3DPrintGood');

}


function addScrtchProgrammingProduction() {

    //添加机器人的最近发布
    let goodFirst = new Array();
    let message = {productionImage: '../../../resources/img搜索框/production.jpg', productionName:'上班摸鱼小游戏', productionOwner: '陈鑫', disscussNum:'123456', thumbUpNum:'654321',
        disscussIco:'../../../resources/ico/discuss.png', thumbUpIco:'../../../resources/ico/thumbsUp.png'};
    for(let i = 0; i < 12; ++i){
        goodFirst.push(message);
    }
    addProductionMessage(goodFirst, '#scrtchProgrammingNew');


    //添加机器人的最热评论
    let hotDisscuss = new Array();
    for(let i = 0; i < 13; ++i){
        hotDisscuss.push(message);
    }
    addProductionMessage(hotDisscuss, '#scrtchProgrammingHot');

    //添加机器人的点赞优先
    let thumbUpFirst = new Array();
    for(let i = 0; i < 14; ++i){
        thumbUpFirst.push(message);
    }
    addProductionMessage(thumbUpFirst, '#scrtchProgrammingGood');

}


function addProductionMessage(ProductionMessage, id) {

    let numOfProduction = ProductionMessage.length;
    let count = 0;

    for(let i = 0; i <= numOfProduction/4; ++i){
        let addmessage = '<div class="row" style="margin-top: 1%">';
        for(let j = count; j<numOfProduction; ++j){
            addmessage = addmessage + '<a class="card; col-3" style="width: 18rem; margin-top: 3%">'
                + '<img搜索框 class="card-img搜索框-top" src="'+ProductionMessage[j].productionImage+'" style="width: 100%; text-align: center" alt="Card image cap">'
                + '<div class="card-body" style="background-color: #f7f5f5">'
                + '<h5 style="color: black" class="card-title">'+ProductionMessage[j].productionName+'</h5>'
                + '<span>'
                + '<img搜索框 src="'+ProductionMessage[j].disscussIco+'" height="24" width="24" style="margin-bottom: 5px"/>'
                + '<span>'+ProductionMessage[j].disscussNum+'</span>'
                + '<img搜索框 src="'+ProductionMessage[j].thumbUpIco+'" height="24" width="24" style="margin-bottom: 10px; margin-left: 10%"/>'
                + '<span>'+ProductionMessage[j].thumbUpNum+'</span>'
                + '</span>'
                + '<p style="color: #6c757d" class="card-text">'+ProductionMessage[j].productionOwner+'</p>'
                + '</div>'
                + '</a>';
            count++;
        }
        addmessage = addmessage+'</div>';
        $(id).append(addmessage);
    }

}




























