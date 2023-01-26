import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Note() {
  return (
    <>
    <div className="note">Note</div>
      <div className="note-footer">
        <small>13/01/2023</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </>
  )
}

export default Note