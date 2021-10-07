
function addNamesToList(){
    let names = [];
    document.getElementById("btnid").addEventListener('click', function addNamesToList () {
        names.push(document.getElementById("name").value);
        document.getElementById('groupd-id').innerHTML = names.join(' ');
    });
}
addNamesToList()