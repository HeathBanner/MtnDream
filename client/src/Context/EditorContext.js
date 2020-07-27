import React, { useState, createContext, useEffect } from 'react';
import { initialPreview, initialImg, initialArticle } from './Services/EditorServices';

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {

    const [editMode, setEditMode] = useState(false);
    const [articleList, setArticleList] = useState('');
    const [article, setArticle] = useState(initialArticle);
    
    // Once component mounts it will fetch a list of the
    // top ten most recent articles
    useEffect(() => { handleList() }, []);

    const handleList = async () => {
        const { handleFetchList } = await import("./Services/EditorServices");
        const result = await handleFetchList();
        setArticleList(result);
    };

    // Function toggles edit mode on or off
    const handleMode = () => setEditMode(!editMode);

    // Once the user clicks on the article they wish to edit, it will then
    // grab the article elements and set them to state.
    const editArticle = async (title) => {
        if (title === 'new') return; 
        const { fetchEditArticle } = await import("./Services/EditorServices");
        const result = await fetchEditArticle(title);

        setArticle({ ...article, ...result });
    };

    // Once the user clicks on any element. The "section mode" will
    // switch to the appropriate state to handle further edits within the element
    const handleSectionMode = (newSection) => {
        console.log(newSection);
        setArticle({
            ...article,
            sectionMode: { ...newSection }
        });
    };

    // This function will set the Title state to published if the article
    // was successfully stored within the database
    const setPublished = () => {
        setArticle({
            ...article,
            title: { ...article.title, isPublished: true }
        });
    };

    // This function will create a new body element within the state
    const handleNewBody = () => {
        const newBody = article.body;
        newBody.push(initialPreview);
        setArticle({
            ...article,
            body: newBody
        });
    };

    // This function will create a new Image element within the
    // Body and update the state
    const newImgEl = () => {
        const newBody = article.body;
        newBody.push({ ...initialImg });
        setArticle({
            ...article,
            body: newBody
        });
    };

    const handleImage = (value, section) => {
        if (!value) return;
        let newBody = article.body;
        let reader = new FileReader();
        reader.onload = (e) => {
            let result;
            const parsed = e.target.result.split("base64,");
            if (section.El === 'image') {
                newBody[section.index].src = parsed[1];
                result = { ...article, body: newBody };
            } else {
                result = {
                    ...article,
                    jumbotron: {
                        ...article.jumbotron,
                        src: parsed[1]
                    }
                };
            }
            setArticle(result);
        };
        reader.readAsDataURL(value);
    };

    // This function will check which section the user has selected and
    // update the state with the new input
    const handleInput = async (value, section) => {
        const { handleInputSwitch } = await import("./Services/EditorServices");
        const result = await handleInputSwitch(value, section, article);
        if (result) setArticle(result);
    };

    // This function will check which section the user is in and
    // change the font value to the selected font
    const handleFont = async ( newFont ) => {
        const { handleFontSwitch } = await import("./Services/EditorServices");
        const result = handleFontSwitch(newFont, article);
        setArticle(result);
    };

    // This function will check with section the user is in
    // and update the value with the new selected value
    const handleStyling = async (style) => {
        const { handleStylingSwitch } = await import("./Services/EditorServices");
        const result = handleStylingSwitch(style, article);
        setArticle(result);
    };

    // This function will check with section the user is in
    // and update the value with the new selected value
    const handleJustify = async (justification) => {
        const { handleJustifySwitch } = await import("./Services/EditorServices");
        const result = handleJustifySwitch(justification, article);
        setArticle(result);
    };

    // This function will check with section the user is in
    // and update the value with the new selected value
    const handleTextStyle = async (style) => {
        const { handleTextStyleSwitch } = await import("./Services/EditorServices");
        const result = handleTextStyleSwitch(style, article);
        setArticle(result);
    };

    // This function will check with section the user is in
    // and update the value with the new selected value
    const handleTextColor = async (color) => {
        const { handleTextColorSwitch } = await import("./Services/EditorServices");
        const result = handleTextColorSwitch(color, article);
        setArticle(result);
    };

    // This function will check with section the user is in
    // and update the value with the new selected value
    const handleMarginTop = (e) => {
        const { el, index } = article.sectionMode;
        if (el === 'title') {
            return setArticle({
                ...article,
                title: {
                    ...article.title,
                    marginTop: e.target.value
                }
            });
        } else if ( (el === 'body') || (el === 'image') ) {
            let newBody = article.body;
            newBody[index].marginTop = e.target.value;
            return setArticle({ ...article, body: [ ...newBody ] });
        }
    };

    // This function will check with section the user is in
    // and update the value with the new selected value
    const handleMarginBottom = (e) => {
        const { el, index } = article.sectionMode;
        if (el === 'title') {
            return setArticle({
                ...article,
                title: {
                    ...article.title,
                    marginBottom: e.target.value 
                }
            });
        } else if ( (el === 'body') || (el === 'image') ) {
            let newBody = article.body;
            newBody[index].marginBottom = e.target.value;
            return setArticle({ ...article, body: [ ...newBody ] });
        }
    };

    // All functions and variables listed will be shared with the child consumers
    return (
        <EditorContext.Provider
            value={{
                handleInput,
                handleImage,
                handleStyling,
                handleFont,
                handleJustify,
                handleTextStyle,
                handleTextColor,
                handleMarginTop,
                handleMarginBottom,
                handleMode,
                handleSectionMode,
                setPublished,
                articleList,
                editMode,
                editArticle,
                handleNewBody,
                newImgEl,
                ...article
            }}
        >
            {children}
        </EditorContext.Provider>
    );
};
