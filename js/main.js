$('#delete').on('click', function(){
    $(this).closest('tr').fadeOut(1000, function(){
        $(this).remove();
    });
});

const newSkills = [
    {},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];

$('#button').on('click', function(){
    if(!newHomes.length) return;
    const home = newHomes.pop();
    let newRowElement = `
        <tr>
            <td>${home.address}</td>
            <td>${home.sf}</td>
            <td>${home.bedrooms}</td>
            <td>${home.baths}</td>
            <td>${home.price}</td>
            <td><button class="btn btn-xs btn-danger">Remove</button></td>
        </tr>
    `;
    $('#homes tbody').append(newRowElement);
    //if no more homes to add, disable button
    if(!newHomes.length) $('#addHome').attr('disabled', true);
});