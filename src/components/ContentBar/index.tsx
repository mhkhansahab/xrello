import { FC, useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddIcon from '@mui/icons-material/Add';

const MainDiv = styled("div")(({ theme }) => ({
    width: "74%",
    maxWidth: '1000px',
    height: "80vh",
    display: "flex",
    alignItems: "center",
    margin: '0 10px',
    '.columns': {
        background: alpha(theme.palette.info.main, 0.03),
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        backdropFilter: "blur(30px)",
        width: '250px',
        padding: '16px 14px',
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    '.add-icon': {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        cursor: 'pointer'
    },
    '.tile': {
        userSelect: "none",
        padding: 16,
        margin: "0 0 8px 0",
        minHeight: "50px",
        background: alpha(theme.palette.info.main, 0.03),
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        backdropFilter: "blur(30px)",
        color: '#fff',
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    '.avatar': {
        borderRadius: '100%',
        height: '30px',
        width: '30px',
        backgroundColor: '#fff',
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        
    },
    '.content':{
        textAlign: 'left',
        maxWidth: '160px',
        wordBreak: 'break-all',
        maxHeight: '300px',
    },
    '.scroller::-webkit-scrollbar': {
        height: '12px'
    },
    '.scroller::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: alpha(theme.palette.info.main,0.2),
        outline: 'none',
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        backdropFilter: "blur(30px)",
    }

}));

const itemsFromBackend = [
    { id: '0', content: "First taskasdasdasdasdasdasd asdasdasd asdasdasd asdasdasd asdasd asdasd asdasd asdasdsa asdsad" },
    { id: '1', content: "Second taskas asas" },
    { id: '2', content: "Third task" },
    { id: '3', content: "Fourth task" },
    { id: '4', content: "Fifth task" },
    { id: '0', content: "First taskasdasdasdasdasdasd asdasdasd asdasdasd asdasdasd asdasd asdasd asdasd asdasdsa asdsad" },
    { id: '1', content: "Second taskas asas" },
    { id: '2', content: "Third task" },
    { id: '3', content: "Fourth task" },{ id: '0', content: "First taskasdasdasdasdasdasd asdasdasd asdasdasd asdasdasd asdasd asdasd asdasd asdasdsa asdsad" },
    { id: '1', content: "Second taskas asas" },
    { id: '2', content: "Third task" },
    { id: '3', content: "Fourth task" },
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
                            <div className="columns">
                                <div>{column.name}</div>
                                <div className="add-icon"><AddIcon /></div>
                            </div>
                            <div style={{ margin: 8 }}>
                                <Droppable droppableId={columnId} key={columnId} >
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                className='scroller'
                                                style={{
                                                    padding: 4,
                                                    width: 250,
                                                    minHeight: 500,
                                                    maxHeight: 500,
                                                    overflowY: 'auto'
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
                                                                        className='tile'
                                                                        style={{

                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        <div className="content">{item.content.length >= 65 ? item.content.substring(0, 65).concat('...'): item.content}</div>
                                                                        <div className="avatar"></div>
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
