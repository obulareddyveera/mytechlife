import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingLock, faColumns, faEye, faEyeLowVision, faSave } from '@fortawesome/free-solid-svg-icons';
import { useFormikContext } from 'formik';

export default function TagEditor() {
  const editorRef = useRef(null);
  const { values, setFieldValue } = useFormikContext()
  const handleEditorChange = () => {
    const editorContentData = editorRef.current.getContent();
    setFieldValue('editorContent', editorContentData)
  }

  return (
    <>
      <div className="w-full">
        <Editor
          ref={editorRef}
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={values.editorContent}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
          apiKey='no-api-key'
          onChange={handleEditorChange}
        />
      </div>
    </>
  );
}
