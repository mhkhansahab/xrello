//@ts-nocheck
import { FC, useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../redux/actions/statusActions";
import { setCurrentCard } from "../../redux/actions/cardActions";

const MainDiv = styled("div")(({ theme }) => ({
  height: "98%",
  flex: 1,
  display: "flex",
  alignItems: "center",
  margin: "0 10px",
  ".columns": {
    background: alpha(theme.palette.info.main, 0.03),
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backdropFilter: "blur(30px)",
    width: "250px",
    padding: "16px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".add-icon": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  ".tile": {
    userSelect: "none",
    padding: 16,
    margin: "0 0 8px 0",
    minHeight: "50px",
    background: alpha(theme.palette.info.main, 0.03),
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backdropFilter: "blur(30px)",
    color: "#fff",
    textAlign: "left",
  },
  ".avatar": {
    borderRadius: "100%",
    height: "30px",
    width: "30px",
    backgroundColor: "#fff",
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
  },
  ".content": {
    textAlign: "left",
    maxWidth: "160px",
    wordBreak: "break-all",
    maxHeight: "300px",
  },
  ".scroller::-webkit-scrollbar": {
    height: "12px",
    width: "5px",
  },
  ".scroller::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    backgroundColor: alpha(theme.palette.info.main, 0.2),
    outline: "none",
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    backdropFilter: "blur(30px)",
  },
}));

const itemsFromBackend = [
  { _id: "1", description: "Second taskas asas" },
  { _id: "2", description: "Third task" },
  { _id: "3", description: "Fourth task" },
];

const columnsFromBackend = {
  "0": {
    name: "Requested",
    items: [],
  },
  "1": {
    name: "To do",
    items: [],
  },
  "2": {
    name: "In Progress",
    items: [],
  },
  "3": {
    name: "Done",
    items: [],
  },
};

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });

    console.log(destination.droppableId);
    bodyFormData = {
      ...bodyFormData,
      _id: currentCard?.id,
    };
    axios({
      method: "put",
      url: baseUrl + "card/updateCard",
      data: bodyFormData,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        dispatch(changeStatus({ cardModal: false, cardUpdate: false }));
      })
      .catch((error: any) => console.log(error));
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const Index: FC<{ cards: any }> = ({ cards }) => {
  const dispatch = useDispatch();
  let [inProgress, setInProgress] = useState<any>([]);
  let [review, setReview] = useState<any>([]);
  let [done, setDone] = useState<any>([]);
  let [todo, setTodo] = useState<any>([]);

  const [columns, setColumns] = useState<{}>({});

  useEffect(() => {
    console.log(cards);
    cards?.forEach((e: any) => {
      if (e.status == "In Progress") {
        inProgress = [...inProgress, e];
        //@ts-ignore
        setInProgress(inProgress);
      } else if (e.status == "Review") {
        review = [...review, e];
        //@ts-ignore
        setReview(review);
      } else if (e.status == "Done") {
        done = [...done, e];
        //@ts-ignore
        setDone(done);
      } else if (e.status == "Todo") {
        todo = [...todo, e];
        //@ts-ignore
        setTodo(todo);
      }
    });

    setColumns({
      "0": {
        name: "To do",
        items: todo,
      },
      "1": {
        name: "In Progress",
        items: inProgress,
      },
      "2": {
        name: "Review",
        items: review,
      },
      "3": {
        name: "Done",
        items: done,
      },
    });
  }, [cards]);

  return (
    <MainDiv>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                height: "100%",
              }}
              key={columnId}
            >
              <div className="columns" style={{ borderRadius: "5px" }}>
                <div>{column.name}</div>
                <div
                  className="add-icon"
                  onClick={() => {
                    dispatch(
                      changeStatus({ cardModal: true, cardUpdate: true })
                    );
                    dispatch(setCurrentCard({ status: column.name }));
                  }}
                >
                  <AddIcon />
                </div>
              </div>
              <div style={{ margin: 8, flex: 1 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="scroller"
                        style={{
                          padding: 4,
                          width: 250,
                          minHeight: "250px",
                          maxHeight: "calc(100vh - 180px)",
                          overflowY: "auto",
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item._id}
                              draggableId={item._id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    onClick={() => {
                                      dispatch(
                                        setCurrentCard({
                                          title: item?.title,
                                          description: item?.description,
                                        })
                                      );
                                      dispatch(
                                        changeStatus({
                                          cardModal: true,
                                          cardUpdate: true,
                                        })
                                      );
                                    }}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="tile"
                                    style={{
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <div
                                      className="content"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                      }}
                                    >
                                      {item.description.length >= 65
                                        ? item.title
                                        : item.title}
                                    </div>
                                    <div className="content">
                                      {item.description.length >= 65
                                        ? "description : " +
                                          item.description
                                            .substring(0, 65)
                                            .concat("...")
                                        : "desc: " + item.description}
                                    </div>

                                    <div
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {"asignee: " + item.assignTo}
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </MainDiv>
  );
};

export default Index;
