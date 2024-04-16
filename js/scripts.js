function newItem(){

    // 1. Add new item to list of items
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.text(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }

    // 2. Cross out item on doubleclick
    li.on('dblclick', function() {
        li.toggleClass('strike');
    });

    // 3(i). Add the delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    $(crossOutButton).append('X');
    li.append(crossOutButton);

    // 3(ii). Add CLASS DELETE (DISPLAY: NONE) from css
    crossOutButton.on('click', function () {
        li.addClass('delete');
    });

    // 4. Reorder the items
    $('#list').sortable();
}