import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "1st title",
      contents: "1st contents",
      isDone: false,
    },
    {
      id: uuid(),
      title: "2nd title",
      contents: "2nd contents",
      isDone: false,
    },
    {
      id: uuid(),
      title: "3rd title",
      contents: "3rd contents",
      isDone: false,
    },
  ]);

  const onDeleteButtonClickHandler = (id) => {
    setTodos(
      todos.filter((filterItem) => {
        return filterItem.id !== id;
      })
    );
  };

  useEffect(() => {
    console.log("title", title);
    console.log("contents", contents);
  }, [title, contents]);

  return (
    <>
      <div>
        <br />
        title :
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br />
        contents :
        <input
          type="text"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        ></input>
        <br />
        <button
          onClick={() => {
            setTodos([
              ...todos,
              {
                id: uuid(),
                title,
                contents,
                idDone: false,
              },
            ]);
          }}
        >
          save
        </button>
      </div>
      <hr></hr>
      <div>
        <h5>todos</h5>
        <br></br>
        {todos
          .filter((filterItem) => {
            return !filterItem.isDone;
          })
          .map((mapItem) => {
            return (
              <div key={mapItem.id}>
                <span>title : {mapItem.title}</span>
                <br />
                <span>contents : {mapItem.contents}</span>
                <br></br>
                <button
                  onClick={() => {
                    const newTodos = todos.map((doneItem) => {
                      if (doneItem.id === mapItem.id) {
                        return { ...doneItem, isDone: true };
                      } else {
                        return doneItem;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  done
                </button>
                <button onClick={() => onDeleteButtonClickHandler(mapItem.id)}>
                  delete
                </button>
                <p></p>
              </div>
            );
          })}
        <hr></hr>
        <h5>done</h5>
        {todos
          .filter((filterItem) => {
            return filterItem.isDone;
          })
          .map((mapItem) => {
            return (
              <div key={mapItem.id}>
                <span>title : {mapItem.title}</span>
                <br />
                <span>contents : {mapItem.contents}</span>
                <br></br>
                <button
                  onClick={() => {
                    const newTodos = todos.map((doneItem) => {
                      if (doneItem.id === mapItem.id) {
                        return { ...doneItem, isDone: false };
                      } else {
                        return doneItem;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  cancle
                </button>
                <button onClick={() => onDeleteButtonClickHandler(mapItem.id)}>
                  delete
                </button>
                <p></p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
