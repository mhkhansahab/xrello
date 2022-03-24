import { FC, useEffect, useState } from "react";
import { styled,alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const MainDiv = styled("div")(({ theme }) => ({
    width: "74%",
    maxWidth: '1000px',
    height: "80vh",
    display: "flex",
    alignItems: "center",
    margin: '10px',
    '.columns': {
        background: alpha(theme.palette.info.main, 0.03),
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        backdropFilter: "blur(30px)",
        width: '250px',
        padding: '10px 0'
    }

}));

const itemsFromBackend = [
    { id: '0', content: "First task" },
    { id: '1', content: "Second task" },
    { id: '2', content: "Third task" },
    { id: '3', content: "Fourth task" },
    { id: '4', content: "Fifth task" }
];

const columnsFromBackend = {
    '0': {
        name: "Requested",
        items: itemsFromBackend
    },
    '1': {
        name: "To do",
        items: []
    },
    '2': {
        name: "In Progress",
        items: []
    },
    '3': {
        name: "Done",
        items: []
    }
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
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

const Index: FC = () => {
    const [columns, setColumns] = useState(columnsFromBackend);

    return (
        <MainDiv>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: 'start'
                            }}
                            key={columnId}
                        >
                            <h2 className="columns">{column.name}</h2>
                            <div style={{ margin: 8 }}>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver
                                                        ? "lightblue"
                                                        : "lightgrey",
                                                    padding: 4,
                                                    width: 250,
                                                    minHeight: 500
                                                }}
                                            >
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: "none",
                                                                            padding: 16,
                                                                            margin: "0 0 8px 0",
                                                                            minHeight: "50px",
                                                                            backgroundColor: snapshot.isDragging
                                                                                ? "#263B4A"
                                                                                : "#456C86",
                                                                            color: "white",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        {item.content}
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
