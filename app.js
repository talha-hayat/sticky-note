const div = document.getElementById('addnote');
const addbtn = document.getElementById('btn');

function getnote() {
    const txtarea = document.createElement('textarea');
    const txtareatxt = document.createTextNode('');
    txtarea.appendChild(txtareatxt);
    txtarea.setAttribute('class', 'w-full h-full rounded-lg p-4 bg-blue-100 hover:bg-blue-200 font-sans text-gray-800 text-lg placeholder-gray-500 focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out');
    txtarea.setAttribute('placeholder', 'Enter text');

    const notediv = document.createElement('div');
    notediv.appendChild(txtarea);
    div.appendChild(notediv);
    console.log(notediv);

    notediv.setAttribute('class', 'note-container w-full sm:w-[30%] md:w-[25%] lg:w-[20%] h-60 border-2 border-blue-800 rounded-lg m-4 p-4 flex flex-col bg-white shadow-md relative');

    // Add the delete functionality
    notediv.setAttribute('ondblclick', 'del(this)');
}

function del(ele) {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
        ele.remove();
    }
}
