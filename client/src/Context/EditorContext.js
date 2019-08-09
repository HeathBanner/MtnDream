import React, { useState, createContext, useEffect } from 'react';

export const EditorContext = createContext();

const intialPreview = {
    text: '',
    bold: false,
    italic: false,
    underline: false,
    color: 'black',
    highlight: false,
    font: 'Roboto',
    justify: 'left',
    textStyle: 'body1',
}

export const EditorProvider = props => {

    const [editMode, setEditMode] = useState(false);
    const [articleList, setArticleList] = useState([]);

    const [sectionMode, setSectionMode] = useState({ el:'title' });
    const [title, setTitle] = useState({ ...intialPreview });
    const [jumbotron, setJumbotron] = useState('');
    const [currentBody, setCurrentBody] = useState(0);
    const [body, setBody] = useState([ { ...intialPreview } ]);
    
    useEffect(() => {

        console.log(currentBody, body[0]);
    }, [body, currentBody])

    useEffect(() => {

        fetch('/api/editors/getList')
        .then(res => res.json())
        .then(result => {
            console.log(...result);
            setArticleList(result)
        })
        .catch(error => console.log(error));

    }, [] );

    const handleMode = () => {
        setEditMode(!editMode);
    };

    const editArticle = index => {

        setTitle(articleList[index].title);
        setJumbotron(articleList[index].jumbotron);
        setBody(articleList[index].body);
        setEditMode(!editMode);
    };

    const editBodyEl = index => {

        setCurrentBody(index);
    };

    const newBodyEl = () => {

        const newBody = body;
        newBody.push({ ...intialPreview });

        setCurrentBody( newBody.length - 1 );
        setBody([ ...newBody ]);
    };

    const handleSectionMode = newSection => {

        switch (newSection.el) {

            case 'title':
            case newSection.el !== sectionMode.el:
                setSectionMode({ ...newSection });
                break;

            case 'jumbotron' && newSection.el !== sectionMode.el:
                setSectionMode({ ...newSection });
                break;

            case 'body' && newSection.el !== sectionMode.el:
                editBodyEl(newSection.index);
                setSectionMode({ ...newSection });
                break;

            default:
                return
        }
    };

    const handleSubmit = data => {

        console.log('SUBMIT')

        fetch('/api/editors/newSection',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            setTitle(result.title);
            setJumbotron(result.jumbotron);
            setBody(result.body);
        })
        .catch(error => {
            console.log(error);
        })
    };

    const handleBody = ( input, index ) => {

        let newBody = body;
        newBody[index].text = input;
        console.log(index, newBody[index]);

        setBody([ ...newBody ]);
    };

    const handleInput = ( e, section ) => {

        let input = e.target.value;

        switch (section.El) {

            case 'title':
                setTitle({ ...title, text: input });
                break;
            case 'jumbotron':
                setJumbotron(input);
                break;
            case 'body':
                handleBody(input, section.index);
                break;
            default:
                return
        }
    };

    const handleArticle = () => {

        let section = {
            sectionMode: sectionMode,
            title: title,
            jumbotron: jumbotron,
            body: body,
        }

        handleSubmit(section);
    };

    const handleFont = ( newFont ) => {

        switch (sectionMode.el) {
        
            case 'title':
                setTitle({ ...title, font: newFont });
                break;
            case 'body':
                let newBody = body;
                newBody[sectionMode.index].font = newFont;
                setBody([ ...newBody ]);
                break;
            default:
                return
        }
    };

    const handleStyling = ( style, color ) => {

        switch (sectionMode.el) {
            
            case 'title':
                setTitle({ ...title, [style]: !title[style] });
                break;
            case 'body':
                let newBody = body;
                newBody[sectionMode.index][style] = !newBody[sectionMode.index][style];    
                setBody([ ...newBody ]);   
                break;
            default:
                return
        }
    };

    const handleJustify = justification => {

        switch (sectionMode.el) {

            case 'title':
                setTitle({ ...title, justify: justification });
                break;
            case 'body':
                let newBody = body;
                newBody[sectionMode.index].justify = justification;    
                setBody([ ...newBody ]);
                break;
            default:
                return
        }
    };

    const handleTextStyle = style => {

        switch (sectionMode.el) {

            case 'title':
                setTitle({ ...title, textStyle: style });
                break;
            case 'body':
                let newBody = body;
                newBody[sectionMode.index].textStyle = style;    
                setBody([ ...newBody ]);
                break;
            default:
                return
        }
    };

    return (

        <EditorContext.Provider
            value={{
                handleInput,
                title,
                jumbotron,
                currentBody,
                body,
                handleStyling,
                handleFont,
                handleJustify,
                handleTextStyle,
                handleArticle,
                editMode,
                editArticle,
                editBodyEl,
                newBodyEl,
                handleMode,
                articleList,
                sectionMode,
                handleSectionMode
            }}
        >
            {props.children}
        </EditorContext.Provider>
    );
};