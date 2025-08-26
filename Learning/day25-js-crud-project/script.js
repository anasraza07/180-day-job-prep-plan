const titleInput = document.querySelector("#title-input")
const textInput = document.querySelector("#text-input")
const addNoteButton = document.querySelector("#add-note-btn")

const updateNoteButton = document.querySelector("#update-note-btn")

const notesContainer = document.querySelector("#notes-container")

const notes = JSON.parse(localStorage.getItem("notes")) || [];
displayNotes();

addNoteButton.addEventListener("click", () => {
    if (titleInput.value == "" && textInput.value == "") {
        alert("Please enter a title or a text!")
        return;
    }

    const noteObj = {
        id: Date.now(),
        title: titleInput.value,
        body: textInput.value
    }
    notes.push(noteObj);
    saveInStorage();

    titleInput.value = "";
    textInput.value = "";

    console.log(notes);

    displayNotes();
})

function displayNotes() {
    notesContainer.innerHTML = "";
    notes.forEach(noteObj => {
        const { id, title, body } = noteObj;

        const note = document.createElement("div");
        note.className = "note";

        const h2 = document.createElement("h2");
        h2.textContent = title;
        note.appendChild(h2)

        const p = document.createElement("p");
        p.textContent = body;
        note.appendChild(p)

        const editButton = document.createElement("button")
        editButton.className = "edit-note-btn";
        editButton.textContent = "Edit"
        editButton.addEventListener("click", () => editNote(id));
        note.appendChild(editButton)

        const deleteButton = document.createElement("button")
        deleteButton.className = "delete-note-btn";
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener("click", () => deleteNote(id))
        note.appendChild(deleteButton)

        notesContainer.prepend(note);
    })
}

function editNote(id) {
    const note = notes.find(noteObj => noteObj.id == id)
    const noteIndex = notes.findIndex(noteObj => noteObj.id == id)

    // console.log(id);
    // console.log(note, noteIndex);

    addNoteButton.style.display = "none";
    updateNoteButton.style.display = "block";

    titleInput.value = note.title;
    textInput.value = note.body;

    updateNoteButton.addEventListener("click",
        () => updateNote(noteIndex), { once: true });
}

function updateNote(noteIndex) {
    notes[noteIndex].title = titleInput.value;
    notes[noteIndex].body = textInput.value;

    saveInStorage();

    updateNoteButton.style.display = "none";
    addNoteButton.style.display = "block"

    displayNotes();

    titleInput.value = "";
    textInput.value = "";
}

function deleteNote(id) {
    const index = notes.findIndex(noteObj => noteObj.id == id);
    notes.splice(index, 1);
    saveInStorage();

    displayNotes();
}

function saveInStorage() {  
    if (!notes.length) {
        localStorage.clear();
        return;
    }

    localStorage.setItem("notes", JSON.stringify(notes));
}