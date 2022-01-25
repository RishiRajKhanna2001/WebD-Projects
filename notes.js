// console.log("working on notes app");
showNotes();

//if user add note add it in local storage
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e) {
    let addText=document.getElementById("addText");
    let addTitle=document.getElementById("addTitle");
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let myObj={
        title:addTitle.value,
        text:addText.value
    }
    notesObj.push(myObj); 
    // notesObj.push(addText.value); 
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addText.value="";
    addTitle.value="";
    // console.log(notesObj);
    showNotes();
})
//function to show elements from local storage
function showNotes() {
    let notes=localStorage.getItem("notes");//apan notes naamak variable se- 'jo notes likhenge'- vo denote kar rhe hai
    if(notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div class="noteCard mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${index.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`});
    let notesElm=document.getElementById('notes');
    if (notesObj.length!=0) {
        notesElm.innerHTML=html;
    }
    else{
        
        notesElm.innerHTML=` Nothing To Show! `;
    }
}

//funct. to delete node
function deleteNote(index) {
    // console.log("I'am deleting this note",index);
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

//search functionality
let search=document.getElementById('searchTxt');
search.addEventListener('input',function() {
    let inputVal=search.value.toLowerCase();
    // console.log('Input event fired',inputVal);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display="block";
        }
        else{
            element.style.display="none";

        }

    })
})