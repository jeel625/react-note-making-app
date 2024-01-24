import React from "react";

function Main( {activeNote, onUpdateNote} )
{   
    const onEditField = (key,value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    };

    if(!activeNote) return <div className="no-active-note">No note selected</div>;

    return(
        <div className='app-main'>
            <div className='app-main-note-edit'>
                <input className='app-main-note-edit-input' type="text" id='title' value={activeNote && activeNote.title} onChange={(e) => onEditField("title",e.target.value)} autoFocus />
                <textarea className='app-main-note-edit-input' id='body'  value={activeNote && activeNote.body} onChange={(e) => onEditField("body",e.target.value)} placeholder="Write your note here...." />
            </div>
            <div className='app-main-note-preview'>
                <h1 className='preview-title'>{ activeNote && activeNote.title } </h1>
                <b className='markdown-preview'> { activeNote && activeNote.body }</b>
            </div>
        </div>
    );
}

export default Main;