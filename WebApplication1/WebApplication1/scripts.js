var fullPathWithAddedPngAtTheEnd;
var name;
var breed;

$('#submitter').on('click', function () {
    $('#dim').css('display', 'block');
    $('#dialog-box-add-cat').css('display', 'block');
    var path = $('#path-to-file').val().trim();
    fullPathWithAddedPngAtTheEnd = path + '.png';
    $('#new-cat-pic').attr('src', fullPathWithAddedPngAtTheEnd);
    $('#path-to-file').val('');
})

$('#cancel-cat-button').on('click', function () {
    $('#dim').css('display', 'none');
    $('#dialog-box-add-cat').css('display', 'none');
    $('#name').val('');
    $('#breed').val('');
})

$('#add-cat-button').on('click', function () {
    $('#dim').css('display', 'none');
    $('#dialog-box-add-cat').css('display', 'none');
    name = $('#name').val();
    breed = $('#breed').val();

    $('#catalogue').append('<div class="item-container"><div class="catalogue-item"><img class="mini-pic" src="' + fullPathWithAddedPngAtTheEnd.toString()
                            + '" /><span class="cat-name-field">Name: ' + name
                            + '</span><span class="breed">'
                            + breed + '</span></div><div class="closing-catalogue-item">X</div></div>');
    $('#name').val('');
    $('#breed').val('');
})

$('body').on('click', '.closing-catalogue-item', function () {
    var parent = $(this).parent();
    parent.remove();
})

$('body').on('click', '.catalogue-item', function () {
    var picSrc = $(this).find('.mini-pic').attr('src');
    var name = $(this).find('.cat-name-field').text();
    var breed = $(this).find('.breed').text();

    $('#cat-info-pic').attr('src', picSrc);
    $('#cat-info-name').text(name);
    $('#cat-info-breed').text('Breed: ' + breed);

    $('#show-cat-info').css('display', 'block');
    $('#dim').css('display', 'block');
})

$('body').on('click', '#close-cat-info', function () {
    $('#show-cat-info').css('display', 'none');
    $('#dim').css('display', 'none');
})




    


