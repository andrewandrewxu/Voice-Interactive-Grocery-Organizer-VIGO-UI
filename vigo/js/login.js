function hideLowPriv(){
    $('#new-request-item').hide()
}

function hideHighPriv(){
    $('#new-fridge-item').hide();
    $('#new-list-item').hide();
    $('.new-list-item').hide();
    $('.btn-frige-full').hide();
    $('.btn-frige-low').hide();
    $('.btn-frige-empty').hide();
    $('.btn-bought-it').hide();
    $('.btn-add-to-list').hide();
    $('.btn-delete').hide();
}

function showLowPriv(){
    $('#new-request-item').show()
}

function showHighPriv(){
    $('#new-fridge-item').show();
    $('#new-list-item').show();
    $('.new-list-item').show();
    $('.btn-frige-full').show();
    $('.btn-frige-low').show();
    $('.btn-frige-empty').show();
    $('.btn-bought-it').show();
    $('.btn-add-to-list').show();
    $('.btn-delete').show();
}

function login (e) {
    var username = $('#username').val();
    if (Data.checkPrivilege(username) < 1) {
        showHighPriv();
        hideLowPriv();
    } else {
        showLowPriv();
        hideHighPriv();
    }
}

$('#login').on('click', login);
