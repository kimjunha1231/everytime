import React from 'react';

function CreateUser({ title, content, onChange, onCreate }) {
  return (
    <div>
      <input
        name="title"
        placeholder="계정명"
        onChange={onChange}
        value={title}
      />
      <input
        name="content"
        placeholder="이메일"
        onChange={onChange}
        value={content}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;