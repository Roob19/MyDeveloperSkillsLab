//Will only delete <tr> given in document (index.html)
$('#delete').on('click', function(){
    $(this).closest('tr').fadeOut(1000, function(){
        $(this).remove();
    });
});
//nope
$('.plsDelete').on('click', function(){
    $(this).closest('tr').fadeOut(1000, function(){
        $(this).remove();
    });
});

$('#button').on('click', function(){
    let input = $('#field').val();
    let newRowElement = `
        <tr>
            <td><button id="delete" class="plsDelete">X</button></td>
            <td>${input}</td>
        </tr>
    `;
    $('#appendHere').append(newRowElement);
});
//appends, but doesn't carry button to where I can delete